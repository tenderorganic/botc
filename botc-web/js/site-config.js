/**
 * Site Configuration
 *
 * This is the ONLY file you need to edit to set up your community's site.
 * Everything else works out of the box.
 */

const SITE_CONFIG = {
    // ==========================================
    // REQUIRED: Supabase Connection
    // ==========================================
    // Get these from: Supabase Dashboard > Settings > API
    // Leave as-is to use demo mode with sample data.

    supabaseUrl: 'https://fxiuwruhtjkpcpvluwqe.supabase.co',           // e.g., 'https://abcdefgh.supabase.co'
    supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4aXV3cnVodGprcGNwdmx1d3FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0NTYzNjIsImV4cCI6MjA5MjAzMjM2Mn0.4gHjXeAbPn8KJ47gnPHc8HlvyKqUgVWXNaUbc_pt3Ns',   // The "anon public" key

    // ==========================================
    // OPTIONAL: Customize Your Site
    // ==========================================

    // Community name shown in the header
    communityName: 'We are the Alsaahir, we are Legion.',

    // Minimum games a player needs to appear on the leaderboard
    minGamesForLeaderboard: 10,

    // ELO settings
    defaultRating: 1500,    // Starting ELO for new players
    kFactor: 32,            // How much each game affects ratings (higher = more volatile)
};

// Export for use in other modules
// (Do not modify below this line)
export default SITE_CONFIG;
