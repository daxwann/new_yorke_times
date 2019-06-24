/* global $ */

// dropdown function that applies or removes 'expand' class to the sections-sidebar nav
const openSidebar = (e) => {
  e.stopPropagation();
	$("#sections-sidebar").addClass('expand');
  $("#sections-sidebar-btn").off('click', openSidebar);
  $(document).on("click", closeSidebar);
}

const closeSidebar = () => {
  $("#sections-sidebar").removeClass('expand');
  $("#sections-sidebar-btn").on('click', openSidebar);
  $(document).off("click", closeSidebar);
}

// Add click listener to hamburger icon which invokes sidebar function
$(() => $('#sections-sidebar-btn').on('click', openSidebar));

// Close an expanded sidebar after 1 second if mouse leaves sidebar element
// Incomplete feature because sidebar does not remain open if mouse reenters element
let sidebarTimer;

$(() => $('#sections-sidebar').mouseenter(() => {
  clearTimeout(sidebarTimer);
}));

$(() => $('#sections-sidebar').mouseleave(() => {
  sidebarTimer = setTimeout(closeSidebar, 1000); 
}));
