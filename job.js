/**
 * CareerBoard - Job Details & Multi-Step Application Flow Controller
 * Handles loading job metadata, rendering comprehensive role sections,
 * managing the 4-step modal wizard with real-time validation, resume simulation,
 * live preview, submission loading, and localStorage persistence.
 */

(function () {
  'use strict';

  // Application Draft State
  const appState = {
    currentJob: null,
    currentStep: 1,
    formData: {
      name: '',
      email: '',
      phone: '',
      portfolio: '',
      noticePeriod: '2 Weeks',
      experienceYears: '5-7 years',
      resumeFileName: '',
      resumeFileSize: '',
      coverNote: '',
      agreementChecked: false
    },
    isSubmitting: false
  };

  // DOM Cache
  const DOM = {
    // Header & Nav
    navSavedJobs: document.getElementById('navSavedJobs'),
    savedJobsBadge: document.getElementById('savedJobsBadge'),
    btnShareTop: document.getElementById('btnShareTop'),
    btnApplyTop: document.getElementById('btnApplyTop'),
    btnBackToSearch: document.getElementById('btnBackToSearch'),

    // Hero Section
    companyAvatar: document.getElementById('companyAvatar'),
    jobTitleDisplay: document.getElementById('jobTitleDisplay'),
    companyNameDisplay: document.getElementById('companyNameDisplay'),
    departmentDisplay: document.getElementById('departmentDisplay'),
    postedDateDisplay: document.getElementById('postedDateDisplay'),
    heroBadgesList: document.getElementById('heroBadgesList'),
    btnSaveHero: document.getElementById('btnSaveHero'),

    // Content Sections
    jobDescDisplay: document.getElementById('jobDescDisplay'),
    responsibilitiesList: document.getElementById('responsibilitiesList'),
    requirementsList: document.getElementById('requirementsList'),
    skillsBadgesList: document.getElementById('skillsBadgesList'),
    benefitsGrid: document.getElementById('benefitsGrid'),
    companyAboutTitle: document.getElementById('companyAboutTitle'),
    companySizeDisplay: document.getElementById('companySizeDisplay'),
    companyIndustryDisplay: document.getElementById('companyIndustryDisplay'),
    companyFoundedDisplay: document.getElementById('companyFoundedDisplay'),
    companyWebsiteDisplay: document.getElementById('companyWebsiteDisplay'),

    // Sidebar
    salarySidebarVal: document.getElementById('salarySidebarVal'),
    equitySidebarVal: document.getElementById('equitySidebarVal'),
    alreadyAppliedBanner: document.getElementById('alreadyAppliedBanner'),
    appRefBannerText: document.getElementById('appRefBannerText'),
    btnApplyMain: document.getElementById('btnApplyMain'),
    btnSaveSidebar: document.getElementById('btnSaveSidebar'),
    saveSidebarText: document.getElementById('saveSidebarText'),
    statWorkModeDisplay: document.getElementById('statWorkModeDisplay'),
    statTypeDisplay: document.getElementById('statTypeDisplay'),
    statExpDisplay: document.getElementById('statExpDisplay'),
    statApplicantsDisplay: document.getElementById('statApplicantsDisplay'),
    similarJobsList: document.getElementById('similarJobsList'),

    // Application Modal
    applicationModal: document.getElementById('applicationModal'),
    btnCloseAppModal: document.getElementById('btnCloseAppModal'),
    modalJobCompany: document.getElementById('modalJobCompany'),
    modalJobTitle: document.getElementById('modalJobTitle'),
    wizardProgressBar: document.getElementById('wizardProgressBar'),
    stepIndicators: [
      document.getElementById('stepIndicator1'),
      document.getElementById('stepIndicator2'),
      document.getElementById('stepIndicator3'),
      document.getElementById('stepIndicator4')
    ],
    stepPanels: [
      document.getElementById('stepPanel1'),
      document.getElementById('stepPanel2'),
      document.getElementById('stepPanel3'),
      document.getElementById('stepPanel4')
    ],
    btnWizardBack: document.getElementById('btnWizardBack'),
    btnWizardNext: document.getElementById('btnWizardNext'),

    // Step 1 Form Fields & Errors
    applicantName: document.getElementById('applicantName'),
    applicantEmail: document.getElementById('applicantEmail'),
    applicantPhone: document.getElementById('applicantPhone'),
    applicantPortfolio: document.getElementById('applicantPortfolio'),
    applicantNotice: document.getElementById('applicantNotice'),
    applicantExpYears: document.getElementById('applicantExpYears'),
    errApplicantName: document.getElementById('errApplicantName'),
    errApplicantEmail: document.getElementById('errApplicantEmail'),
    errApplicantPhone: document.getElementById('errApplicantPhone'),

    // Step 2 Fields & Dropzone
    resumeFileInput: document.getElementById('resumeFileInput'),
    resumeDropzone: document.getElementById('resumeDropzone'),
    resumeFilePreview: document.getElementById('resumeFilePreview'),
    previewFileName: document.getElementById('previewFileName'),
    previewFileSize: document.getElementById('previewFileSize'),
    btnRemoveResume: document.getElementById('btnRemoveResume'),
    errApplicantResume: document.getElementById('errApplicantResume'),
    applicantCoverNote: document.getElementById('applicantCoverNote'),
    coverNoteCount: document.getElementById('coverNoteCount'),
    errApplicantCoverNote: document.getElementById('errApplicantCoverNote'),

    // Step 3 Review Card
    prevTargetRole: document.getElementById('prevTargetRole'),
    prevTargetCompany: document.getElementById('prevTargetCompany'),
    prevCandidateName: document.getElementById('prevCandidateName'),
    prevCandidateEmail: document.getElementById('prevCandidateEmail'),
    prevCandidatePhone: document.getElementById('prevCandidatePhone'),
    prevCandidateNotice: document.getElementById('prevCandidateNotice'),
    prevResumeName: document.getElementById('prevResumeName'),
    prevCoverNote: document.getElementById('prevCoverNote'),
    chkAgreement: document.getElementById('chkAgreement'),
    errAgreement: document.getElementById('errAgreement'),

    // Step 4 Success Elements
    successJobRole: document.getElementById('successJobRole'),
    successRefCode: document.getElementById('successRefCode'),
    btnCopyRefCode: document.getElementById('btnCopyRefCode'),

    // Toast
    toastContainer: document.getElementById('toastContainer')
  };

  /**
   * Toast Notification Helper
   */
  function showToast(message, type = 'info') {
    if (!DOM.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'alert');

    let iconSvg = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>`;
    
    if (type === 'success') {
      iconSvg = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>`;
    }

    toast.innerHTML = `${iconSvg}<span>${message}</span>`;
    DOM.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 250);
    }, 3000);
  }

  /**
   * Get Benefit Icon SVG based on keyword
   */
  function getBenefitIcon(benefitText) {
    const lower = benefitText.toLowerCase();
    if (lower.includes('health') || lower.includes('medical') || lower.includes('dental') || lower.includes('care')) {
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>`;
    } else if (lower.includes('401') || lower.includes('equity') || lower.includes('stock') || lower.includes('compensation') || lower.includes('pension')) {
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`;
    } else if (lower.includes('learn') || lower.includes('budget') || lower.includes('education') || lower.includes('conference')) {
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`;
    } else if (lower.includes('pto') || lower.includes('vacation') || lower.includes('holiday') || lower.includes('travel') || lower.includes('leave')) {
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>`;
    } else {
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`;
    }
  }

  /**
   * Load and Render Complete Job Details
   */
  function loadJob() {
    const params = new URLSearchParams(window.location.search);
    const jobId = params.get('id') || 'job-1';
    const job = DataService.getJobById(jobId);

    if (!job) {
      document.title = "Job Not Found | CareerBoard";
      DOM.jobTitleDisplay.textContent = "Position Not Found";
      DOM.jobDescDisplay.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem;">
          <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
            The requested job posting may have been filled or expired.
          </p>
          <a href="index.html" class="btn btn-primary">Browse Active Job Openings</a>
        </div>
      `;
      DOM.btnApplyMain.style.display = 'none';
      DOM.btnApplyTop.style.display = 'none';
      return;
    }

    appState.currentJob = job;
    document.title = `${job.title} at ${job.company} | CareerBoard`;

    // 1. Hero Avatar & Info
    DOM.companyAvatar.textContent = job.companyInitials;
    DOM.companyAvatar.style.backgroundColor = job.companyLogoBg;
    DOM.companyAvatar.style.color = job.companyLogoColor;

    DOM.jobTitleDisplay.textContent = job.title;
    DOM.companyNameDisplay.textContent = job.company;
    DOM.departmentDisplay.textContent = job.department;
    DOM.postedDateDisplay.textContent = `Posted ${job.postedDate}`;

    // Badges in Hero
    DOM.heroBadgesList.innerHTML = `
      <span class="pill-badge pill-salary">${job.salaryDisplay}</span>
      <span class="pill-badge pill-workmode">${job.workMode}</span>
      <span class="pill-badge pill-location">📍 ${job.location}</span>
      <span class="pill-badge pill-exp">${job.experienceLevel} Level</span>
      <span class="pill-badge" style="background:var(--surface-muted); color:var(--text-secondary); text-transform:capitalize;">${job.type}</span>
      ${job.isUrgent ? `<span class="pill-badge pill-urgent">⚡ Actively Hiring</span>` : ''}
    `;

    // 2. Prose / Description
    DOM.jobDescDisplay.innerHTML = `<p>${job.description}</p>`;

    // 3. Responsibilities
    DOM.responsibilitiesList.innerHTML = job.responsibilities.map(resp => `
      <li class="detail-bullet-item">
        <svg class="detail-bullet-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${resp}</span>
      </li>
    `).join('');

    // 4. Requirements
    DOM.requirementsList.innerHTML = job.requirements.map(req => `
      <li class="detail-bullet-item">
        <svg class="detail-bullet-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        <span>${req}</span>
      </li>
    `).join('');

    // 5. Tech Stack & Skills
    DOM.skillsBadgesList.innerHTML = job.skills.map(skill => `
      <a href="index.html?skills=${encodeURIComponent(skill)}" class="card-skill-tag" style="font-size: 0.875rem; padding: 0.35rem 0.75rem;">
        ${skill}
      </a>
    `).join('');

    // 6. Benefits Grid
    DOM.benefitsGrid.innerHTML = job.benefits.map(benefit => `
      <div class="benefit-item-card">
        <div class="benefit-icon-wrapper">
          ${getBenefitIcon(benefit)}
        </div>
        <div class="benefit-text">${benefit}</div>
      </div>
    `).join('');

    // 7. Company Details
    DOM.companyAboutTitle.textContent = job.company;
    DOM.companySizeDisplay.textContent = job.companyProfile.size;
    DOM.companyIndustryDisplay.textContent = job.companyProfile.industry;
    DOM.companyFoundedDisplay.textContent = job.companyProfile.founded;
    DOM.companyWebsiteDisplay.innerHTML = `<a href="${job.companyProfile.website}" target="_blank" rel="noopener noreferrer" style="color:var(--primary); text-decoration:underline;">Visit Site &nearr;</a>`;

    // 8. Sticky Sidebar Stats
    DOM.salarySidebarVal.textContent = job.salaryDisplay;
    DOM.equitySidebarVal.textContent = job.equity || 'Plus Comprehensive Benefits';
    DOM.statWorkModeDisplay.textContent = job.workMode;
    DOM.statTypeDisplay.textContent = job.type;
    DOM.statExpDisplay.textContent = job.experienceLevel;
    DOM.statApplicantsDisplay.textContent = `${job.applicantsCount} candidates`;

    // 9. Check Saved Status
    updateSavedState();

    // 10. Check Application Status
    updateApplicationState();

    // 11. Similar Jobs Widget
    renderSimilarJobs();
  }

  /**
   * Update Saved Buttons and State
   */
  function updateSavedState() {
    if (!appState.currentJob) return;
    const isSaved = StorageService.isJobSaved(appState.currentJob.id);

    DOM.btnSaveHero.classList.toggle('saved', isSaved);
    DOM.btnSaveHero.setAttribute('aria-label', isSaved ? 'Remove from saved jobs' : 'Save job');

    DOM.btnSaveSidebar.classList.toggle('btn-outline-primary', isSaved);
    DOM.saveSidebarText.textContent = isSaved ? 'Saved to Bookmarks' : 'Save Job for Later';

    DOM.savedJobsBadge.textContent = StorageService.getSavedJobIds().length;
  }

  /**
   * Check if User Already Applied to this Job
   */
  function updateApplicationState() {
    if (!appState.currentJob) return;
    const existingApp = StorageService.getApplicationByJobId(appState.currentJob.id);

    if (existingApp) {
      DOM.alreadyAppliedBanner.style.display = 'flex';
      DOM.appRefBannerText.textContent = `Reference: ${existingApp.referenceNumber} • Submitted ${new Date(existingApp.appliedAt).toLocaleDateString()}`;
      DOM.btnApplyMain.textContent = 'View Application Receipt';
      DOM.btnApplyTop.textContent = 'View Receipt';
    } else {
      DOM.alreadyAppliedBanner.style.display = 'none';
      DOM.btnApplyMain.textContent = 'Apply for this Position';
      DOM.btnApplyTop.textContent = 'Apply Now';
    }
  }

  /**
   * Render Similar Jobs in Sidebar
   */
  function renderSimilarJobs() {
    if (!appState.currentJob) return;
    const similar = DataService.getSimilarJobs(appState.currentJob.id, 3);

    if (similar.length === 0) {
      DOM.similarJobsList.innerHTML = `<p style="font-size: 0.875rem; color: var(--text-muted);">No direct similar positions found.</p>`;
      return;
    }

    DOM.similarJobsList.innerHTML = similar.map(job => `
      <div class="similar-job-item">
        <a href="job.html?id=${job.id}" class="similar-job-title">${job.title}</a>
        <div class="similar-job-meta">
          <span>${job.company} &bull; ${job.workMode}</span>
          <span style="font-weight: 600; color: var(--success-text);">${job.salaryDisplay.split(' - ')[0]}</span>
        </div>
      </div>
    `).join('');
  }

  /**
   * Open the Application Modal
   */
  function openApplicationModal() {
    if (!appState.currentJob) return;

    // If already applied, show receipt step directly
    const existingApp = StorageService.getApplicationByJobId(appState.currentJob.id);
    if (existingApp) {
      goToStep(4);
      DOM.successJobRole.textContent = `${existingApp.jobTitle} at ${existingApp.company}`;
      DOM.successRefCode.textContent = existingApp.referenceNumber;
      DOM.modalJobCompany.textContent = existingApp.company;
      DOM.modalJobTitle.textContent = existingApp.jobTitle;
      DOM.applicationModal.classList.add('active');
      return;
    }

    DOM.modalJobCompany.textContent = appState.currentJob.company;
    DOM.modalJobTitle.textContent = appState.currentJob.title;

    // Reset step
    goToStep(1);
    DOM.applicationModal.classList.add('active');
    DOM.applicantName.focus();
  }

  /**
   * Close Application Modal
   */
  function closeApplicationModal() {
    DOM.applicationModal.classList.remove('active');
  }

  /**
   * Step Wizard Navigation
   */
  function goToStep(stepNumber) {
    appState.currentStep = stepNumber;

    // Update Panels
    DOM.stepPanels.forEach((panel, idx) => {
      if (idx + 1 === stepNumber) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });

    // Update Step Indicators
    DOM.stepIndicators.forEach((ind, idx) => {
      const stepIdx = idx + 1;
      ind.classList.remove('active', 'completed');
      if (stepIdx === stepNumber) {
        ind.classList.add('active');
      } else if (stepIdx < stepNumber) {
        ind.classList.add('completed');
      }
    });

    // Update Footer Buttons
    if (stepNumber === 1) {
      DOM.btnWizardBack.style.visibility = 'hidden';
      DOM.btnWizardNext.innerHTML = 'Continue to Step 2 &rarr;';
      DOM.btnWizardNext.className = 'btn btn-primary';
    } else if (stepNumber === 2) {
      DOM.btnWizardBack.style.visibility = 'visible';
      DOM.btnWizardNext.innerHTML = 'Review Application &rarr;';
      DOM.btnWizardNext.className = 'btn btn-primary';
    } else if (stepNumber === 3) {
      DOM.btnWizardBack.style.visibility = 'visible';
      DOM.btnWizardNext.innerHTML = 'Submit Application 🚀';
      DOM.btnWizardNext.className = 'btn btn-primary btn-success';
      populatePreviewCard();
    } else if (stepNumber === 4) {
      DOM.btnWizardBack.style.visibility = 'hidden';
      DOM.btnWizardNext.innerHTML = 'Return to Job Search &rarr;';
      DOM.btnWizardNext.className = 'btn btn-primary';
    }
  }

  /**
   * Validate Form Step 1
   */
  function validateStep1() {
    let isValid = true;
    const name = DOM.applicantName.value.trim();
    const email = DOM.applicantEmail.value.trim();
    const phone = DOM.applicantPhone.value.trim();

    // Name check
    if (name.length < 2) {
      DOM.applicantName.classList.add('is-invalid');
      DOM.errApplicantName.classList.add('visible');
      isValid = false;
    } else {
      DOM.applicantName.classList.remove('is-invalid');
      DOM.errApplicantName.classList.remove('visible');
      appState.formData.name = name;
    }

    // Email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      DOM.applicantEmail.classList.add('is-invalid');
      DOM.errApplicantEmail.classList.add('visible');
      isValid = false;
    } else {
      DOM.applicantEmail.classList.remove('is-invalid');
      DOM.errApplicantEmail.classList.remove('visible');
      appState.formData.email = email;
    }

    // Phone check
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 7) {
      DOM.applicantPhone.classList.add('is-invalid');
      DOM.errApplicantPhone.classList.add('visible');
      isValid = false;
    } else {
      DOM.applicantPhone.classList.remove('is-invalid');
      DOM.errApplicantPhone.classList.remove('visible');
      appState.formData.phone = phone;
    }

    appState.formData.portfolio = DOM.applicantPortfolio.value.trim();
    appState.formData.noticePeriod = DOM.applicantNotice.value;
    appState.formData.experienceYears = DOM.applicantExpYears.value;

    return isValid;
  }

  /**
   * Validate Form Step 2
   */
  function validateStep2() {
    let isValid = true;

    // Resume check
    if (!appState.formData.resumeFileName) {
      DOM.errApplicantResume.classList.add('visible');
      DOM.resumeDropzone.style.borderColor = 'var(--danger)';
      isValid = false;
    } else {
      DOM.errApplicantResume.classList.remove('visible');
      DOM.resumeDropzone.style.borderColor = '';
    }

    // Cover note check
    const note = DOM.applicantCoverNote.value.trim();
    if (note.length < 20) {
      DOM.applicantCoverNote.classList.add('is-invalid');
      DOM.errApplicantCoverNote.classList.add('visible');
      isValid = false;
    } else {
      DOM.applicantCoverNote.classList.remove('is-invalid');
      DOM.errApplicantCoverNote.classList.remove('visible');
      appState.formData.coverNote = note;
    }

    return isValid;
  }

  /**
   * Validate Form Step 3
   */
  function validateStep3() {
    if (!DOM.chkAgreement.checked) {
      DOM.errAgreement.classList.add('visible');
      return false;
    }
    DOM.errAgreement.classList.remove('visible');
    appState.formData.agreementChecked = true;
    return true;
  }

  /**
   * Populate Step 3 Live Preview Card
   */
  function populatePreviewCard() {
    if (!appState.currentJob) return;
    DOM.prevTargetRole.textContent = appState.currentJob.title;
    DOM.prevTargetCompany.textContent = appState.currentJob.company;
    DOM.prevCandidateName.textContent = appState.formData.name || '--';
    DOM.prevCandidateEmail.textContent = appState.formData.email || '--';
    DOM.prevCandidatePhone.textContent = appState.formData.phone || '--';
    DOM.prevCandidateNotice.textContent = appState.formData.noticePeriod || '--';
    DOM.prevResumeName.textContent = appState.formData.resumeFileName 
      ? `📄 ${appState.formData.resumeFileName} (${appState.formData.resumeFileSize})`
      : 'No file attached';
    DOM.prevCoverNote.textContent = appState.formData.coverNote || '--';
  }

  /**
   * Handle File Selection for Resume
   */
  function handleResumeFile(file) {
    if (!file) return;

    // Validate size (< 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      showToast('File exceeds 5MB limit. Please select a smaller resume file.', 'danger');
      return;
    }

    // Validate extension
    const validExts = ['.pdf', '.doc', '.docx'];
    const hasValidExt = validExts.some(ext => file.name.toLowerCase().endsWith(ext));
    if (!hasValidExt) {
      showToast('Invalid format. Only .pdf, .doc, and .docx files are accepted.', 'danger');
      return;
    }

    // Format readable size
    const sizeInMb = (file.size / (1024 * 1024)).toFixed(1);
    const sizeStr = `${sizeInMb} MB`;

    appState.formData.resumeFileName = file.name;
    appState.formData.resumeFileSize = sizeStr;

    DOM.previewFileName.textContent = file.name;
    DOM.previewFileSize.textContent = sizeStr;
    DOM.resumeFilePreview.classList.add('visible');
    DOM.errApplicantResume.classList.remove('visible');
    DOM.resumeDropzone.style.display = 'none';

    showToast(`Attached resume: ${file.name}`, 'info');
  }

  /**
   * Simulated Submission Execution
   */
  function submitApplication() {
    if (appState.isSubmitting) return;
    appState.isSubmitting = true;

    DOM.btnWizardNext.disabled = true;
    DOM.btnWizardNext.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
      </svg>
      <span>Submitting Application...</span>
    `;

    // Simulated network transmission delay
    setTimeout(() => {
      const applicationRecord = {
        jobId: appState.currentJob.id,
        jobTitle: appState.currentJob.title,
        company: appState.currentJob.company,
        applicant: {
          name: appState.formData.name,
          email: appState.formData.email,
          phone: appState.formData.phone,
          portfolio: appState.formData.portfolio,
          noticePeriod: appState.formData.noticePeriod,
          experienceYears: appState.formData.experienceYears,
          resumeFileName: appState.formData.resumeFileName,
          coverNote: appState.formData.coverNote
        }
      };

      const savedApp = StorageService.saveApplication(applicationRecord);

      appState.isSubmitting = false;
      DOM.btnWizardNext.disabled = false;

      // Update Step 4
      DOM.successJobRole.textContent = `${appState.currentJob.title} at ${appState.currentJob.company}`;
      DOM.successRefCode.textContent = savedApp.referenceNumber;

      goToStep(4);
      updateApplicationState();
      showToast('Application successfully submitted!', 'success');
    }, 1100);
  }

  /**
   * Set up all Event Listeners
   */
  function setupEventListeners() {
    // Back navigation preservation
    if (DOM.btnBackToSearch) {
      DOM.btnBackToSearch.addEventListener('click', (e) => {
        if (window.history.length > 1 && document.referrer && (document.referrer.includes('index.html') || document.referrer.includes(window.location.host))) {
          e.preventDefault();
          window.history.back();
        }
      });
    }

    // 1. Top Bar / Hero Apply Trigger
    DOM.btnApplyTop.addEventListener('click', openApplicationModal);
    DOM.btnApplyMain.addEventListener('click', openApplicationModal);

    // 2. Bookmark / Save Buttons
    const handleSaveToggle = () => {
      if (!appState.currentJob) return;
      const isSaved = StorageService.toggleSaveJob(appState.currentJob.id);
      updateSavedState();
      showToast(isSaved ? `Saved "${appState.currentJob.title}" to bookmarks` : 'Removed from saved jobs', isSaved ? 'success' : 'info');
    };

    DOM.btnSaveHero.addEventListener('click', handleSaveToggle);
    DOM.btnSaveSidebar.addEventListener('click', handleSaveToggle);

    // 3. Share Button
    DOM.btnShareTop.addEventListener('click', () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href)
          .then(() => showToast('Job link copied to clipboard!', 'success'))
          .catch(() => showToast('Failed to copy link', 'danger'));
      } else {
        showToast('Link copied: ' + window.location.href, 'info');
      }
    });

    // 4. Close Modal
    DOM.btnCloseAppModal.addEventListener('click', closeApplicationModal);
    DOM.applicationModal.addEventListener('click', (e) => {
      if (e.target === DOM.applicationModal) closeApplicationModal();
    });

    // 5. Wizard Next / Back Navigation
    DOM.btnWizardBack.addEventListener('click', () => {
      if (appState.currentStep > 1) {
        goToStep(appState.currentStep - 1);
      }
    });

    DOM.btnWizardNext.addEventListener('click', () => {
      if (appState.currentStep === 1) {
        if (validateStep1()) {
          goToStep(2);
        }
      } else if (appState.currentStep === 2) {
        if (validateStep2()) {
          goToStep(3);
        }
      } else if (appState.currentStep === 3) {
        if (validateStep3()) {
          submitApplication();
        }
      } else if (appState.currentStep === 4) {
        window.location.href = 'index.html';
      }
    });

    // 6. Resume Dropzone & File Input
    DOM.resumeDropzone.addEventListener('click', () => DOM.resumeFileInput.click());
    DOM.resumeDropzone.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        DOM.resumeFileInput.click();
      }
    });

    DOM.resumeDropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      DOM.resumeDropzone.classList.add('dragover');
    });

    DOM.resumeDropzone.addEventListener('dragleave', () => {
      DOM.resumeDropzone.classList.remove('dragover');
    });

    DOM.resumeDropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      DOM.resumeDropzone.classList.remove('dragover');
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleResumeFile(e.dataTransfer.files[0]);
      }
    });

    DOM.resumeFileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files.length > 0) {
        handleResumeFile(e.target.files[0]);
      }
    });

    DOM.btnRemoveResume.addEventListener('click', () => {
      appState.formData.resumeFileName = '';
      appState.formData.resumeFileSize = '';
      DOM.resumeFileInput.value = '';
      DOM.resumeFilePreview.classList.remove('visible');
      DOM.resumeDropzone.style.display = 'flex';
    });

    // 7. Cover Note Word & Character Counter
    DOM.applicantCoverNote.addEventListener('input', (e) => {
      const len = e.target.value.trim().length;
      DOM.coverNoteCount.textContent = `${len} / 20 min characters`;
      if (len >= 20) {
        DOM.coverNoteCount.style.color = 'var(--success)';
        DOM.applicantCoverNote.classList.remove('is-invalid');
        DOM.errApplicantCoverNote.classList.remove('visible');
      } else {
        DOM.coverNoteCount.style.color = 'var(--text-muted)';
      }
    });

    // 8. Copy Reference ID Button
    DOM.btnCopyRefCode.addEventListener('click', () => {
      const code = DOM.successRefCode.textContent;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(code)
          .then(() => showToast(`Copied reference code: ${code}`, 'success'))
          .catch(() => showToast(`Reference code: ${code}`, 'info'));
      }
    });

    // 9. Input blur real-time validations
    DOM.applicantName.addEventListener('blur', () => {
      if (DOM.applicantName.value.trim().length >= 2) {
        DOM.applicantName.classList.remove('is-invalid');
        DOM.errApplicantName.classList.remove('visible');
      }
    });

    DOM.applicantEmail.addEventListener('blur', () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(DOM.applicantEmail.value.trim())) {
        DOM.applicantEmail.classList.remove('is-invalid');
        DOM.errApplicantEmail.classList.remove('visible');
      }
    });

    DOM.applicantPhone.addEventListener('blur', () => {
      if (DOM.applicantPhone.value.replace(/\D/g, '').length >= 7) {
        DOM.applicantPhone.classList.remove('is-invalid');
        DOM.errApplicantPhone.classList.remove('visible');
      }
    });

    // 10. Escape key closes modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && DOM.applicationModal.classList.contains('active')) {
        closeApplicationModal();
      }
    });
  }

  /**
   * Initialize Controller
   */
  function init() {
    loadJob();
    setupEventListeners();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
