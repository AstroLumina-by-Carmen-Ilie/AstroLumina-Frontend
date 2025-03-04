import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    SimplybookWidget: any;
  }
}

declare const SimplybookWidget: any;

function BookingWidget() {
  const widgetContainerRef = useRef(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//widget.simplybook.me/v2/widget/widget.js";
    script.onload = () => {
      new SimplybookWidget({
        widget_type: "iframe",
        url: "https://astrolumina.simplybook.me",
        theme: "blur",
        theme_settings: {
          timeline_hide_unavailable: "1",
          hide_past_days: "0",
          timeline_show_end_time: "0",
          timeline_modern_display: "as_slots",
          sb_base_color: "#49306b",
          display_item_mode: "block",
          body_bg_color: "#ffffff",
          dark_font_color: "#474747",
          light_font_color: "#ffffff",
          btn_color_1: "#c98e5a",
          sb_company_label_color: "#372515",
          hide_img_mode: "0",
          sb_busy: "#c7b3b3",
          sb_available: "#d6ebff",
        },
        timeline: "modern",
        datepicker: "top_calendar",
        is_rtl: false,
        app_config: {
          clear_session: 0,
          allow_switch_to_ada: 0,
          predefined: [],
        },
        container_id: "sbw_uibtx8",
      });
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return <div id="sbw_uibtx8" ref={widgetContainerRef}></div>;
}

export default BookingWidget;
