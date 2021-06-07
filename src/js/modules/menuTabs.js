// Hightlights with a different color nav menu's clicked menu tab

const menuTabs = () => {  
    
$('#navmenu ul li a').click(function() {
	$('li a').removeClass("active");
	$(this).addClass("active");

	localStorage.setItem('page', $(this).parent().index());
  });

  let ele = localStorage.getItem('page');
  $('#navmenu ul li:eq(' + ele + ')').find('a').addClass('active');

  localStorage.removeItem('page');  // if not set, menu tab will be hightlighted after returning back to the website
}


export default menuTabs;