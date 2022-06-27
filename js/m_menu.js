$(".m_menu-btn").click(function(){
		$("#m_menu-act").switchClass("close_menu", "open_menu", 500, "easeInOutQuad");
		$("#m_menu-act-kr").switchClass("row_hid", "row_vis", 500, "easeInOutQuad");
		$("#m_menu__row-des-id1").removeClass('row_vis').addClass('row_hid');
		$("#m_menu__row-des-id2").removeClass('row_vis').addClass('row_hid');
		$("#m_menu__row-des-id3").removeClass('row_vis').addClass('row_hid');
		$("#m_menu__kr-des-id1").removeClass('row_hid').addClass('row_vis');
		$("#m_menu__kr-des-id2").removeClass('row_hid').addClass('row_vis');
});

$(".m_menu-btn-kr").click(function(){
		$("#m_menu-act").switchClass("open_menu", "close_menu", 500, "easeInOutQuad");
		$("#m_menu-act-kr").switchClass("row_vis", "row_hid", 500, "easeInOutQuad");
		$("#m_menu__row-des-id1").removeClass('row_hid').addClass('row_vis');
		$("#m_menu__row-des-id2").removeClass('row_hid').addClass('row_vis');
		$("#m_menu__row-des-id3").removeClass('row_hid').addClass('row_vis');
		$("#m_menu__kr-des-id1").removeClass('row_vis').addClass('row_hid');
		$("#m_menu__kr-des-id2").removeClass('row_vis').addClass('row_hid');
});