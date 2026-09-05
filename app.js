/**
 * CareerBoard - Dashboard Application Controller
 * Handles search, multifaceted filtering, sorting, bookmarking,
 * localStorage persistence, URL state synchronization, and UI micro-interactions.
 */

(function () {
  'use strict';

  // State
  const state = {
    keyword: '',
    location: '',
    workModes: new Set(),
    experienceLevels: new Set(),
    minSalary: 0,
    empTypes: new Set(),
    selectedSkills: new Set(),
    sortOrder: 'relevance',
    viewMode: 'all', // 'all' or 'saved'
    savedJobIds: new Set(StorageService.getSavedJobIds())
  };

  // DOM Elements Cache
  const DOM = {
    // Header & Navigation
    navFindJobs: document.getElementById('navFindJobs'),
    navSavedJobs: document.getElementById('navSavedJobs'),
    navAppliedJobs: document.getElementById('navAppliedJobs'),
    savedJobsBadge: document.getElementById('savedJobsBadge'),
    appliedJobsBadge: document.getElementById('appliedJobsBadge'),
    btnHelpModal: document.getElementById('btnHelpModal'),
    helpModal: document.getElementById('helpModal'),
    btnCloseHelpModal: document.getElementById('btnCloseHelpModal'),
    btnCloseHelpModalBtn: document.getElementById('btnCloseHelpModalBtn'),
    applicationsModal: document.getElementById('applicationsModal'),
    btnCloseAppsModal: document.getElementById('btnCloseAppsModal'),
    btnCloseAppsModalBtn: document.getElementById('btnCloseAppsModalBtn'),
    appsModalBody: document.getElementById('appsModalBody'),

    // Hero & Search
    searchHubForm: document.getElementById('searchHubForm'),
    keywordInput: document.getElementById('keywordSearchInput'),
    locationInput: document.getElementById('locationSearchInput'),
    clearKeywordBtn: document.getElementById('clearKeywordBtn'),
    clearLocationBtn: document.getElementById('clearLocationBtn'),
    quickTagButtons: document.querySelectorAll('.quick-tag-btn'),

    // Mobile Drawer
    btnOpenMobileFilters: document.getElementById('btnOpenMobileFilters'),
    btnCloseMobileFilters: document.getElementById('btnCloseMobileFilters'),
    filterSidebar: document.getElementById('filterSidebar'),
    filterSidebarBackdrop: document.getElementById('filterSidebarBackdrop'),
    mobileFilterCountBadge: document.getElementById('mobileFilterCountBadge'),
    mobileResultCount: document.getElementById('mobileResultCount'),
    mobileCloseFilterWrapper: document.getElementById('mobileCloseFilterWrapper'),

    // Sidebar Filters
    btnClearAllFilters: document.getElementById('btnClearAllFilters'),
    workModeInputs: document.querySelectorAll('input[name="workMode"]'),
    expInputs: document.querySelectorAll('input[name="experienceLevel"]'),
    salaryRangeInput: document.getElementById('salaryRangeInput'),
    salaryDisplayVal: document.getElementById('salaryDisplayVal'),
    empTypeInputs: document.querySelectorAll('input[name="empType"]'),
    skillsChipCloud: document.getElementById('skillsChipCloud'),

    // Results Area
    resultsCount: document.getElementById('resultsCount'),
    resultsLabel: document.getElementById('resultsLabel'),
    tabAllJobs: document.getElementById('tabAllJobs'),
    tabSavedJobs: document.getElementById('tabSavedJobs'),
    savedTabCount: document.getElementById('savedTabCount'),
    sortOrderSelect: document.getElementById('sortOrderSelect'),
    activeFiltersBar: document.getElementById('activeFiltersBar'),
    jobCardsList: document.getElementById('jobCardsList'),
    emptyState: document.getElementById('emptyState'),
    btnResetEmptyFilters: document.getElementById('btnResetEmptyFilters'),

    // Toast
    toastContainer: document.getElementById('toastContainer'),

    // Footer links
    footerSavedLink: document.getElementById('footerSavedLink'),
    footerAboutLink: document.getElementById('footerAboutLink')
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
   * Initialize Skills Filter Chips in the Sidebar
   */
  function renderSkillsCloud() {
    if (!DOM.skillsChipCloud) return;
    const skills = DataService.getAllSkills();
    DOM.skillsChipCloud.innerHTML = skills.map(skill => `
      <button type="button" class="skill-filter-chip ${state.selectedSkills.has(skill) ? 'active' : ''}" data-skill="${skill}">
        ${skill}
      </button>
    `).join('');
  }

  /**
   * Parse URL Query Params into State
   */
  function parseUrlParams() {
    const params = new URLSearchParams(window.location.search);
    
    if (params.has('q')) {
      state.keyword = params.get('q');
      DOM.keywordInput.value = state.keyword;
    }
    if (params.has('loc')) {
      state.location = params.get('loc');
      DOM.locationInput.value = state.location;
    }
    if (params.has('workMode')) {
      params.get('workMode').split(',').forEach(m => state.workModes.add(m));
      DOM.workModeInputs.forEach(input => {
        if (state.workModes.has(input.value)) input.checked = true;
      });
    }
    if (params.has('experience')) {
      params.get('experience').split(',').forEach(e => state.experienceLevels.add(e));
      DOM.expInputs.forEach(input => {
        if (state.experienceLevels.has(input.value)) input.checked = true;
      });
    }
    if (params.has('salary')) {
      state.minSalary = parseInt(params.get('salary'), 10) || 0;
      DOM.salaryRangeInput.value = state.minSalary;
      DOM.salaryDisplayVal.textContent = state.minSalary > 0 ? `$${state.minSalary.toLocaleString()}+` : '$0+';
    }
    if (params.has('type')) {
      params.get('type').split(',').forEach(t => state.empTypes.add(t));
      DOM.empTypeInputs.forEach(input => {
        if (state.empTypes.has(input.value)) input.checked = true;
      });
    }
    if (params.has('skills')) {
      params.get('skills').split(',').forEach(s => state.selectedSkills.add(s));
    }
    if (params.has('sort')) {
      state.sortOrder = params.get('sort');
      DOM.sortOrderSelect.value = state.sortOrder;
    }
    if (window.location.hash === '#saved' || params.get('view') === 'saved') {
      state.viewMode = 'saved';
    }
  }

  /**
   * Sync Current Filter State to Browser URL
   */
  function syncStateToUrl() {
    const params = new URLSearchParams();

    if (state.keyword.trim()) params.set('q', state.keyword.trim());
    if (state.location.trim()) params.set('loc', state.location.trim());
    if (state.workModes.size > 0) params.set('workMode', Array.from(state.workModes).join(','));
    if (state.experienceLevels.size > 0) params.set('experience', Array.from(state.experienceLevels).join(','));
    if (state.minSalary > 0) params.set('salary', state.minSalary);
    if (state.empTypes.size > 0) params.set('type', Array.from(state.empTypes).join(','));
    if (state.selectedSkills.size > 0) params.set('skills', Array.from(state.selectedSkills).join(','));
    if (state.sortOrder !== 'relevance') params.set('sort', state.sortOrder);
    if (state.viewMode === 'saved') params.set('view', 'saved');

    const newQuery = params.toString();
    const newUrl = window.location.pathname + (newQuery ? '?' + newQuery : '') + (state.viewMode === 'saved' ? '#saved' : '');
    window.history.replaceState({}, '', newUrl);
  }

  /**
   * Filter and Sort Core Engine
   */
  function getFilteredAndSortedJobs() {
    let jobs = DataService.getAllJobs();

    // 1. View Mode (Saved jobs filter)
    if (state.viewMode === 'saved') {
      jobs = jobs.filter(job => state.savedJobIds.has(job.id));
    }

    // 2. Keyword Search
    if (state.keyword.trim()) {
      const q = state.keyword.toLowerCase().trim();
      jobs = jobs.filter(job => {
        return (
          job.title.toLowerCase().includes(q) ||
          job.company.toLowerCase().includes(q) ||
          job.department.toLowerCase().includes(q) ||
          job.shortDesc.toLowerCase().includes(q) ||
          job.skills.some(skill => skill.toLowerCase().includes(q))
        );
      });
    }

    // 3. Location Search
    if (state.location.trim()) {
      const loc = state.location.toLowerCase().trim();
      jobs = jobs.filter(job => {
        return (
          job.location.toLowerCase().includes(loc) ||
          (loc === 'remote' && job.workMode === 'remote')
        );
      });
    }

    // 4. Work Mode
    if (state.workModes.size > 0) {
      jobs = jobs.filter(job => state.workModes.has(job.workMode));
    }

    // 5. Experience Level
    if (state.experienceLevels.size > 0) {
      jobs = jobs.filter(job => state.experienceLevels.has(job.experienceLevel));
    }

    // 6. Minimum Salary
    if (state.minSalary > 0) {
      jobs = jobs.filter(job => job.maxSalary >= state.minSalary);
    }

    // 7. Employment Type
    if (state.empTypes.size > 0) {
      jobs = jobs.filter(job => state.empTypes.has(job.type));
    }

    // 8. Skills
    if (state.selectedSkills.size > 0) {
      jobs = jobs.filter(job => {
        return Array.from(state.selectedSkills).every(skill => job.skills.includes(skill));
      });
    }

    // 9. Sorting
    jobs.sort((a, b) => {
      if (state.sortOrder === 'newest') {
        return a.postedDaysAgo - b.postedDaysAgo;
      } else if (state.sortOrder === 'salary-high') {
        return b.maxSalary - a.maxSalary;
      } else if (state.sortOrder === 'salary-low') {
        return a.minSalary - b.minSalary;
      } else {
        // Relevance: Featured first, then newest
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return a.postedDaysAgo - b.postedDaysAgo;
      }
    });

    return jobs;
  }

  /**
   * Update Dynamic Filter Counts in the Sidebar
   */
  function updateFilterCounts() {
    const allJobs = DataService.getAllJobs();

    // Work modes count
    const workModeCounts = { remote: 0, hybrid: 0, onsite: 0 };
    // Experience counts
    const expCounts = { entry: 0, mid: 0, senior: 0, lead: 0, executive: 0 };
    // Type counts
    const typeCounts = { 'full-time': 0, 'contract': 0, 'part-time': 0, 'internship': 0 };

    allJobs.forEach(job => {
      if (workModeCounts[job.workMode] !== undefined) workModeCounts[job.workMode]++;
      if (expCounts[job.experienceLevel] !== undefined) expCounts[job.experienceLevel]++;
      if (typeCounts[job.type] !== undefined) typeCounts[job.type]++;
    });

    const setEl = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };

    setEl('countWorkModeRemote', workModeCounts.remote);
    setEl('countWorkModeHybrid', workModeCounts.hybrid);
    setEl('countWorkModeOnsite', workModeCounts.onsite);

    setEl('countExpEntry', expCounts.entry);
    setEl('countExpMid', expCounts.mid);
    setEl('countExpSenior', expCounts.senior);
    setEl('countExpLead', expCounts.lead);
    setEl('countExpExecutive', expCounts.executive);

    setEl('countTypeFulltime', typeCounts['full-time']);
    setEl('countTypeContract', typeCounts['contract']);
    setEl('countTypeParttime', typeCounts['part-time']);
    setEl('countTypeInternship', typeCounts['internship']);
  }

  /**
   * Render Active Filter Removable Pills
   */
  function renderActiveFiltersBar() {
    if (!DOM.activeFiltersBar) return;
    const pills = [];

    if (state.keyword.trim()) {
      pills.push({ label: `"${state.keyword.trim()}"`, type: 'keyword' });
    }
    if (state.location.trim()) {
      pills.push({ label: `📍 ${state.location.trim()}`, type: 'location' });
    }
    state.workModes.forEach(mode => {
      pills.push({ label: `Mode: ${mode}`, type: 'workMode', val: mode });
    });
    state.experienceLevels.forEach(exp => {
      pills.push({ label: `Level: ${exp}`, type: 'experience', val: exp });
    });
    if (state.minSalary > 0) {
      pills.push({ label: `Salary: $${state.minSalary.toLocaleString()}+`, type: 'salary' });
    }
    state.empTypes.forEach(t => {
      pills.push({ label: `Type: ${t}`, type: 'empType', val: t });
    });
    state.selectedSkills.forEach(s => {
      pills.push({ label: `Skill: ${s}`, type: 'skill', val: s });
    });

    // Update active count for mobile drawer badge
    if (DOM.mobileFilterCountBadge) {
      if (pills.length > 0) {
        DOM.mobileFilterCountBadge.textContent = pills.length;
        DOM.mobileFilterCountBadge.style.display = 'inline-flex';
      } else {
        DOM.mobileFilterCountBadge.style.display = 'none';
      }
    }

    if (pills.length === 0) {
      DOM.activeFiltersBar.innerHTML = '';
      DOM.activeFiltersBar.style.display = 'none';
      return;
    }

    DOM.activeFiltersBar.style.display = 'flex';
    DOM.activeFiltersBar.innerHTML = pills.map(p => `
      <span class="active-filter-pill">
        <span>${p.label}</span>
        <button type="button" class="active-filter-remove" data-pill-type="${p.type}" data-pill-val="${p.val || ''}" aria-label="Remove filter ${p.label}">
          &times;
        </button>
      </span>
    `).join('') + `
      <button type="button" class="btn btn-ghost btn-sm" id="btnActiveBarClearAll" style="font-size: 0.8125rem; padding: 2px 6px;">
        Clear All
      </button>
    `;
  }

  /**
   * Render Job Cards List
   */
  function renderJobCards(jobs) {
    if (!DOM.jobCardsList) return;

    // Update result counts
    const countText = jobs.length.toString();
    DOM.resultsCount.textContent = countText;
    DOM.resultsLabel.textContent = jobs.length === 1 ? 'job available' : 'jobs available';
    if (DOM.mobileResultCount) {
      DOM.mobileResultCount.textContent = `${countText} ${jobs.length === 1 ? 'job' : 'jobs'}`;
    }

    // Toggle Empty State
    if (jobs.length === 0) {
      DOM.jobCardsList.innerHTML = '';
      DOM.jobCardsList.style.display = 'none';
      DOM.emptyState.style.display = 'flex';
      
      if (state.viewMode === 'saved') {
        DOM.emptyState.querySelector('#emptyStateTitle').textContent = 'No saved jobs yet';
        DOM.emptyState.querySelector('#emptyStateDesc').textContent = 'You have not bookmarked any jobs. Click the bookmark icon on any job card to save it for later.';
        DOM.btnResetEmptyFilters.textContent = 'Explore All Jobs';
      } else {
        DOM.emptyState.querySelector('#emptyStateTitle').textContent = 'No matching positions found';
        DOM.emptyState.querySelector('#emptyStateDesc').textContent = "We couldn't find any roles matching your active search criteria. Try loosening your filters or resetting to see all available roles.";
        DOM.btnResetEmptyFilters.textContent = 'Reset All Filters';
      }
      return;
    }

    DOM.emptyState.style.display = 'none';
    DOM.jobCardsList.style.display = 'flex';

    // Generate Card HTML
    DOM.jobCardsList.innerHTML = jobs.map(job => {
      const isSaved = state.savedJobIds.has(job.id);
      const isApplied = StorageService.getApplicationByJobId(job.id) !== null;

      return `
        <article class="job-card ${job.isFeatured ? 'is-featured' : ''}" id="card-${job.id}" data-job-id="${job.id}">
          <div class="job-card-header">
            <div class="job-card-main">
              <div class="company-avatar" style="background-color: ${job.companyLogoBg}; color: ${job.companyLogoColor};" aria-hidden="true">
                ${job.companyInitials}
              </div>
              <div class="job-header-info">
                <div class="company-meta">
                  <span class="company-name">${job.company}</span>
                  <svg class="verified-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>
                  <span>&bull;</span>
                  <span>${job.department}</span>
                  ${isApplied ? `<span class="pill-badge" style="background:#ECFDF5; color:#065F46; font-size:0.75rem; padding:2px 8px;">✓ Applied</span>` : ''}
                </div>
                <h2 class="job-title-link">
                  <a href="job.html?id=${job.id}">${job.title}</a>
                </h2>
              </div>
            </div>

            <div class="job-card-actions">
              <button 
                type="button" 
                class="btn-bookmark ${isSaved ? 'saved' : ''}" 
                data-job-id="${job.id}"
                aria-label="${isSaved ? 'Remove from saved jobs' : 'Save job'}"
                title="${isSaved ? 'Remove from saved' : 'Save job'}"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </button>
              <a href="job.html?id=${job.id}" class="btn btn-secondary btn-sm" aria-label="View details for ${job.title} at ${job.company}">
                View Details
              </a>
            </div>
          </div>

          <!-- Metadata Badges -->
          <div class="job-meta-pills" aria-label="Job highlights">
            <span class="pill-badge pill-salary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              ${job.salaryDisplay}
            </span>
            <span class="pill-badge pill-workmode">${job.workMode}</span>
            <span class="pill-badge pill-location">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              ${job.location}
            </span>
            <span class="pill-badge pill-exp">${job.experienceLevel} level</span>
            ${job.isUrgent ? `<span class="pill-badge pill-urgent">⚡ Actively Hiring</span>` : ''}
          </div>

          <!-- Short Description -->
          <p class="job-card-description">
            ${job.shortDesc}
          </p>

          <!-- Footer with Skills and Posted Date -->
          <div class="job-card-footer">
            <div class="job-card-skills" aria-label="Key skills required">
              ${job.skills.slice(0, 5).map(skill => `
                <button type="button" class="card-skill-tag" data-filter-skill="${skill}">
                  ${skill}
                </button>
              `).join('')}
              ${job.skills.length > 5 ? `<span class="card-skill-tag">+${job.skills.length - 5}</span>` : ''}
            </div>

            <div class="job-card-posted-date">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>${job.postedDate}</span>
              <span>&bull;</span>
              <span>${job.applicantsCount} applicants</span>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  /**
   * Full UI Refresh Pipeline
   */
  function refreshUI() {
    const jobs = getFilteredAndSortedJobs();
    renderJobCards(jobs);
    renderActiveFiltersBar();
    syncStateToUrl();
    updateBadges();
  }

  /**
   * Synchronize Badges for Saved and Applied Jobs
   */
  function updateBadges() {
    const savedCount = state.savedJobIds.size;
    DOM.savedJobsBadge.textContent = savedCount;
    DOM.savedTabCount.textContent = savedCount;

    const appliedApps = StorageService.getApplications();
    DOM.appliedJobsBadge.textContent = appliedApps.length;

    // Update navigation active states
    if (state.viewMode === 'saved') {
      DOM.navFindJobs.classList.remove('active');
      DOM.navSavedJobs.classList.add('active');
      DOM.tabAllJobs.classList.remove('active');
      DOM.tabSavedJobs.classList.add('active');
    } else {
      DOM.navFindJobs.classList.add('active');
      DOM.navSavedJobs.classList.remove('active');
      DOM.tabAllJobs.classList.add('active');
      DOM.tabSavedJobs.classList.remove('active');
    }
  }

  /**
   * Reset All Filters to Default State
   */
  function resetAllFilters() {
    state.keyword = '';
    state.location = '';
    state.workModes.clear();
    state.experienceLevels.clear();
    state.minSalary = 0;
    state.empTypes.clear();
    state.selectedSkills.clear();
    state.sortOrder = 'relevance';
    state.viewMode = 'all';

    // Reset Form Controls
    DOM.keywordInput.value = '';
    DOM.locationInput.value = '';
    DOM.salaryRangeInput.value = 0;
    DOM.salaryDisplayVal.textContent = '$0+';
    DOM.sortOrderSelect.value = 'relevance';
    DOM.workModeInputs.forEach(input => input.checked = false);
    DOM.expInputs.forEach(input => input.checked = false);
    DOM.empTypeInputs.forEach(input => input.checked = false);

    // Reset Skill chips styling
    document.querySelectorAll('.skill-filter-chip').forEach(chip => chip.classList.remove('active'));

    refreshUI();
    showToast('All filters have been reset', 'info');
  }

  /**
   * Render and Open Applications Modal
   */
  function openApplicationsModal() {
    const apps = StorageService.getApplications();
    if (!DOM.appsModalBody) return;

    if (apps.length === 0) {
      DOM.appsModalBody.innerHTML = `
        <div style="text-align: center; padding: 2rem 0;">
          <div style="width: 56px; height: 56px; background: var(--surface-muted); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; color: var(--text-muted);">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
            </svg>
          </div>
          <h3 style="font-weight: 700; font-size: 1.15rem; margin-bottom: 0.35rem;">No Applications Yet</h3>
          <p style="font-size: 0.875rem; color: var(--text-muted); max-width: 360px; margin: 0 auto 1.25rem;">
            When you apply for roles on CareerBoard, your application receipts, resume filenames, and tracking IDs will be stored here.
          </p>
        </div>
      `;
    } else {
      DOM.appsModalBody.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${apps.map(app => `
            <div style="background: var(--surface-bg); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; display: flex; flex-direction: column; gap: 0.5rem;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
                <div>
                  <h4 style="font-weight: 700; font-size: 1.05rem; color: var(--text-main);">${app.jobTitle}</h4>
                  <p style="font-size: 0.875rem; color: var(--text-secondary); font-weight: 600;">${app.company}</p>
                </div>
                <span class="pill-badge" style="background: var(--success-light); color: var(--success-text); border: 1px solid #A7F3D0; font-size: 0.75rem;">
                  ${app.status || 'Under Review'}
                </span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.8125rem; color: var(--text-muted); border-top: 1px solid var(--border-color); padding-top: 0.5rem; margin-top: 0.25rem;">
                <span>Ref: <strong style="color: var(--primary); font-family: monospace;">${app.referenceNumber}</strong></span>
                <span>Submitted: ${new Date(app.appliedAt).toLocaleDateString()}</span>
              </div>
              <div style="font-size: 0.8125rem; color: var(--text-secondary);">
                <span>Candidate: <strong>${app.applicant.name}</strong> (${app.applicant.email})</span>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    DOM.applicationsModal.classList.add('active');
  }

  /**
   * Set up all Event Listeners
   */
  function setupEventListeners() {
    // 1. Debounced Keyword Search
    let searchDebounceTimer;
    DOM.keywordInput.addEventListener('input', (e) => {
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        state.keyword = e.target.value;
        refreshUI();
      }, 250);
    });

    DOM.clearKeywordBtn.addEventListener('click', () => {
      DOM.keywordInput.value = '';
      state.keyword = '';
      DOM.keywordInput.focus();
      refreshUI();
    });

    // 2. Debounced Location Search
    let locationDebounceTimer;
    DOM.locationInput.addEventListener('input', (e) => {
      clearTimeout(locationDebounceTimer);
      locationDebounceTimer = setTimeout(() => {
        state.location = e.target.value;
        refreshUI();
      }, 250);
    });

    DOM.clearLocationBtn.addEventListener('click', () => {
      DOM.locationInput.value = '';
      state.location = '';
      DOM.locationInput.focus();
      refreshUI();
    });

    // 3. Quick Tag Buttons in Hero
    DOM.quickTagButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tag = btn.dataset.tag;
        if (tag === 'Remote') {
          state.workModes.clear();
          state.workModes.add('remote');
          DOM.workModeInputs.forEach(inp => inp.checked = inp.value === 'remote');
        } else if (tag === 'Staff') {
          state.experienceLevels.clear();
          state.experienceLevels.add('lead');
          DOM.expInputs.forEach(inp => inp.checked = inp.value === 'lead');
        } else {
          state.keyword = tag;
          DOM.keywordInput.value = tag;
        }
        refreshUI();
        showToast(`Filtered by "${tag}"`, 'info');
      });
    });

    // 4. Work Mode Filter Checkboxes
    DOM.workModeInputs.forEach(input => {
      input.addEventListener('change', (e) => {
        if (e.target.checked) {
          state.workModes.add(e.target.value);
        } else {
          state.workModes.delete(e.target.value);
        }
        refreshUI();
      });
    });

    // 5. Experience Level Checkboxes
    DOM.expInputs.forEach(input => {
      input.addEventListener('change', (e) => {
        if (e.target.checked) {
          state.experienceLevels.add(e.target.value);
        } else {
          state.experienceLevels.delete(e.target.value);
        }
        refreshUI();
      });
    });

    // 6. Salary Range Slider
    DOM.salaryRangeInput.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      state.minSalary = val;
      DOM.salaryDisplayVal.textContent = val > 0 ? `$${val.toLocaleString()}+` : '$0+';
      refreshUI();
    });

    // 7. Employment Type Checkboxes
    DOM.empTypeInputs.forEach(input => {
      input.addEventListener('change', (e) => {
        if (e.target.checked) {
          state.empTypes.add(e.target.value);
        } else {
          state.empTypes.delete(e.target.value);
        }
        refreshUI();
      });
    });

    // 8. Skill Chips Delegated Clicks
    if (DOM.skillsChipCloud) {
      DOM.skillsChipCloud.addEventListener('click', (e) => {
        const chip = e.target.closest('.skill-filter-chip');
        if (!chip) return;
        const skill = chip.dataset.skill;
        if (state.selectedSkills.has(skill)) {
          state.selectedSkills.delete(skill);
          chip.classList.remove('active');
        } else {
          state.selectedSkills.add(skill);
          chip.classList.add('active');
        }
        refreshUI();
      });
    }

    // 9. Sorting Selection
    DOM.sortOrderSelect.addEventListener('change', (e) => {
      state.sortOrder = e.target.value;
      refreshUI();
    });

    // 10. View Mode Tabs (All vs Saved)
    DOM.tabAllJobs.addEventListener('click', () => {
      state.viewMode = 'all';
      refreshUI();
    });

    DOM.tabSavedJobs.addEventListener('click', () => {
      state.viewMode = 'saved';
      refreshUI();
    });

    DOM.navFindJobs.addEventListener('click', (e) => {
      e.preventDefault();
      state.viewMode = 'all';
      refreshUI();
    });

    DOM.navSavedJobs.addEventListener('click', (e) => {
      e.preventDefault();
      state.viewMode = 'saved';
      refreshUI();
    });

    if (DOM.footerSavedLink) {
      DOM.footerSavedLink.addEventListener('click', (e) => {
        e.preventDefault();
        state.viewMode = 'saved';
        refreshUI();
        window.scrollTo({ top: DOM.resultsCount.offsetTop - 100, behavior: 'smooth' });
      });
    }

    // 11. Applied Jobs Navigation Click
    DOM.navAppliedJobs.addEventListener('click', (e) => {
      e.preventDefault();
      openApplicationsModal();
    });

    // 12. Reset All Filters Button
    DOM.btnClearAllFilters.addEventListener('click', resetAllFilters);
    DOM.btnResetEmptyFilters.addEventListener('click', resetAllFilters);

    // 13. Bookmark Button Click (Delegated on Cards List)
    DOM.jobCardsList.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-bookmark');
      if (btn) {
        const jobId = btn.dataset.jobId;
        const isSavedNow = StorageService.toggleSaveJob(jobId);
        state.savedJobIds = new Set(StorageService.getSavedJobIds());
        
        btn.classList.toggle('saved', isSavedNow);
        btn.setAttribute('aria-label', isSavedNow ? 'Remove from saved jobs' : 'Save job');
        btn.setAttribute('title', isSavedNow ? 'Remove from saved' : 'Save job');

        const job = DataService.getJobById(jobId);
        showToast(isSavedNow ? `Saved "${job ? job.title : 'Job'}" to bookmarks` : `Removed from saved jobs`, isSavedNow ? 'success' : 'info');
        
        if (state.viewMode === 'saved') {
          refreshUI();
        } else {
          updateBadges();
        }
        return;
      }

      // Clicking skill tags on cards
      const skillBtn = e.target.closest('.card-skill-tag');
      if (skillBtn && skillBtn.dataset.filterSkill) {
        const skill = skillBtn.dataset.filterSkill;
        state.selectedSkills.add(skill);
        // Highlight in sidebar
        const sidebarChip = document.querySelector(`.skill-filter-chip[data-skill="${skill}"]`);
        if (sidebarChip) sidebarChip.classList.add('active');
        refreshUI();
        showToast(`Filtered by skill: ${skill}`, 'info');
      }
    });

    // 14. Active Filter Remove Pills (Delegated)
    DOM.activeFiltersBar.addEventListener('click', (e) => {
      const removeBtn = e.target.closest('.active-filter-remove');
      if (removeBtn) {
        const type = removeBtn.dataset.pillType;
        const val = removeBtn.dataset.pillVal;

        if (type === 'keyword') {
          state.keyword = '';
          DOM.keywordInput.value = '';
        } else if (type === 'location') {
          state.location = '';
          DOM.locationInput.value = '';
        } else if (type === 'workMode') {
          state.workModes.delete(val);
          const inp = document.querySelector(`input[name="workMode"][value="${val}"]`);
          if (inp) inp.checked = false;
        } else if (type === 'experience') {
          state.experienceLevels.delete(val);
          const inp = document.querySelector(`input[name="experienceLevel"][value="${val}"]`);
          if (inp) inp.checked = false;
        } else if (type === 'salary') {
          state.minSalary = 0;
          DOM.salaryRangeInput.value = 0;
          DOM.salaryDisplayVal.textContent = '$0+';
        } else if (type === 'empType') {
          state.empTypes.delete(val);
          const inp = document.querySelector(`input[name="empType"][value="${val}"]`);
          if (inp) inp.checked = false;
        } else if (type === 'skill') {
          state.selectedSkills.delete(val);
          const chip = document.querySelector(`.skill-filter-chip[data-skill="${val}"]`);
          if (chip) chip.classList.remove('active');
        }

        refreshUI();
        return;
      }

      const clearAllBtn = e.target.closest('#btnActiveBarClearAll');
      if (clearAllBtn) {
        resetAllFilters();
      }
    });

    // 15. Mobile Drawer Handlers
    const openMobileDrawer = () => {
      DOM.filterSidebar.classList.add('open');
      DOM.filterSidebarBackdrop.classList.add('active');
      DOM.mobileCloseFilterWrapper.style.display = 'block';
      document.body.style.overflow = 'hidden';
    };

    const closeMobileDrawer = () => {
      DOM.filterSidebar.classList.remove('open');
      DOM.filterSidebarBackdrop.classList.remove('active');
      DOM.mobileCloseFilterWrapper.style.display = 'none';
      document.body.style.overflow = '';
    };

    DOM.btnOpenMobileFilters.addEventListener('click', openMobileDrawer);
    DOM.filterSidebarBackdrop.addEventListener('click', closeMobileDrawer);
    DOM.btnCloseMobileFilters.addEventListener('click', closeMobileDrawer);

    // 16. Modals
    DOM.btnHelpModal.addEventListener('click', () => DOM.helpModal.classList.add('active'));
    DOM.btnCloseHelpModal.addEventListener('click', () => DOM.helpModal.classList.remove('active'));
    DOM.btnCloseHelpModalBtn.addEventListener('click', () => DOM.helpModal.classList.remove('active'));
    DOM.helpModal.addEventListener('click', (e) => {
      if (e.target === DOM.helpModal) DOM.helpModal.classList.remove('active');
    });

    if (DOM.footerAboutLink) {
      DOM.footerAboutLink.addEventListener('click', (e) => {
        e.preventDefault();
        DOM.helpModal.classList.add('active');
      });
    }

    DOM.btnCloseAppsModal.addEventListener('click', () => DOM.applicationsModal.classList.remove('active'));
    DOM.btnCloseAppsModalBtn.addEventListener('click', () => DOM.applicationsModal.classList.remove('active'));
    DOM.applicationsModal.addEventListener('click', (e) => {
      if (e.target === DOM.applicationsModal) DOM.applicationsModal.classList.remove('active');
    });

    // 17. Storage Event Listener (Cross-tab and cross-page synchronization)
    window.addEventListener('storage', () => {
      state.savedJobIds = new Set(StorageService.getSavedJobIds());
      refreshUI();
    });

    window.addEventListener('careerboard:saved_updated', () => {
      state.savedJobIds = new Set(StorageService.getSavedJobIds());
      refreshUI();
    });

    window.addEventListener('careerboard:applied_updated', () => {
      updateBadges();
      const jobs = getFilteredAndSortedJobs();
      renderJobCards(jobs);
    });

    // 18. Global Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      // Focus Search on "/"
      if (e.key === '/' && document.activeElement !== DOM.keywordInput && document.activeElement !== DOM.locationInput) {
        e.preventDefault();
        DOM.keywordInput.focus();
        DOM.keywordInput.select();
      }
      // Close Modals or Drawer on "Esc"
      if (e.key === 'Escape') {
        DOM.helpModal.classList.remove('active');
        DOM.applicationsModal.classList.remove('active');
        closeMobileDrawer();
      }
      // Toggle Saved View on "Alt + S"
      if (e.altKey && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        state.viewMode = state.viewMode === 'saved' ? 'all' : 'saved';
        refreshUI();
        showToast(state.viewMode === 'saved' ? 'Showing Saved Jobs' : 'Showing All Jobs', 'info');
      }
    });

    // Header scroll elevation
    window.addEventListener('scroll', () => {
      const header = document.getElementById('siteHeader');
      if (header) {
        if (window.scrollY > 20) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    }, { passive: true });
  }

  /**
   * Application Initialization
   */
  function init() {
    renderSkillsCloud();
    parseUrlParams();
    updateFilterCounts();
    setupEventListeners();
    refreshUI();
  }

  // Run when DOM is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
