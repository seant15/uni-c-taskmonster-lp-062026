/**
 * Task Monsters — site-wide LP / quiz config.
 * Lead email: Joseph questionnaire (2026-06). GHL webhook wired when URL is set.
 */
(function () {
  'use strict';

  window.TM_SITE_CONFIG = {
    contactEmail: 'customersupport@gettaskmonsters.com',
    /** Set when GHL inbound webhook is live — quiz POSTs JSON contact payloads here. */
    ghlWebhookUrl: '',
    patentShort: 'Patent-pending encrypted anonymous video with Subject Matter Experts',
    patentFull:
      'Patent Pending Methods and Systems For Connecting Users With Subject Matter Experts. ' +
      'The patent is for an encryption process creating a total anonymous video connection for both users and Subject Matter Experts.',
    connectGoalSec: 60,
    connectMaxMin: 10
  };
})();
