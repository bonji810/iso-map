/**
 * 床タイルの配置表(白or黒)
 */
 export const TILE_MAP = [
  0,1,0,1,0,1,0,1,
  1,0,1,0,1,0,1,0,
  0,1,0,1,0,1,0,1,
  1,0,1,0,1,0,1,0,
  0,1,0,1,0,1,0,1,
  1,0,1,0,1,0,1,0,
  0,1,0,1,0,1,0,1,
  1,0,1,0,1,0,1,0
];

export const TEX_TB = 'tile_b';
export const TEX_TW = 'tile_w';

export const ROOM_UNIT = { width: 94, height: 54};

export const RESOURCE = {
  "tile_b" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/floor_b.png"
  },
  "tile_w" : {
      "texture": "http://amaai-poconuts.com/c96/res/img/room/floor_w.png"
  },
  "ui-btn-move" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/ui_btn_move.png"
  },
  "ui-btn-sample" : {
      "texture": "http://amaai-poconuts.com/c96/res/img/room/ui_btn_sample.png"
  },
  "ui-btn-link" : {
      "texture": "http://amaai-poconuts.com/c96/res/img/room/ui_btn_link.png"
  },
  "ui-btn-set" : {
      "texture": "http://amaai-poconuts.com/c96/res/img/room/ui_btn_set.png"
  },
  "ui-btn-cancel" : {
      "texture": "http://amaai-poconuts.com/c96/res/img/room/ui_btn_cancel.png"
  },
  "megochimo_buta" : {
      "texture": "http://amaai-poconuts.com/c96/res/img/room/buta.png"
  },
  "itemlabel_megochimo" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_megochimo.png",
  },
  "chara" : {
      "texture": "http://amaai-poconuts.com/c96/res/img/room/chara.png"
  },
  "gobori_bmm" : {
      "texture": "http://amaai-poconuts.com/c96/res/img/room/gobori_bmm.png",
      "parts": {
        "1":  {x: 0, y: 0, u: 37, v: 199},
        "nearest":  {x: 37, y: 0, u:74, v: 199},
        "2":  {x: 111, y: 0, u: 37, v: 199}
      }
  },
  "itemlabel_gobori" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_gobori.png",
  },
  "chiba_tamatebako" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/chiba_tamatebako.png"
  },
  "itemlabel_chiba" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_chiba.png",
  },
  "marutoyo_catalog" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/marutoyo_catalog.png"
  },
  "itemlabel_marutoyo" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_marutoyo.png",
  },
  "najima_curryaroma" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/najima_curryaroma.png"
  },
  "itemlabel_najima" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_najima.png",
  },
  "ninana_zangai" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/ninana_zangai.png"
  },
  "itemlabel_ni_nana" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_ni_nana.png",
  },
  "irijako_harigami" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/irijako_harigami.png"
  },
  "itemlabel_irijako" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_irijako.png",
  },
  "herohero_yashinoki" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/herohero_yashinoki.png",
    "parts": {
      "nearest":  {x: 0, y: 0, u: 142, v: 514},
      "1":  {x: 142, y: 0, u: 140, v: 514},
    }
  },
  "itemlabel_herohero" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_herohero.png",
  },
  "unitykong_takoyakiki" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/unitykong_takoyakiki.png",
    "parts": {
      "nearest":  {x: 142, y: 0, u: 142, v: 202},
      "1":  {x: 0, y: 0, u: 142, v: 202},
    }
  },
  "itemlabel_unity_kong" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_unity_kong.png",
  },
  "tokumeikibou_tritelepo" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/tokumeikibou_tritelepo.png",
    "parts": {
      "1":  {x: 0, y: 0, u: 94, v: 385},
      "nearest":  {x: 94, y: 0, u: 188, v: 385},
      "2":  {x: 282, y: 0, u: 94, v: 385}
    }
  },
  "itemlabel_tokumeikibou" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_tokumeikibou.png",
  },
  "daishinrin_coooymeshi" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/daishinrin_coooymeshi.png",
  },
  "itemlabel_daishinrin" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_daishinrin.png",
  },
  "usatore_gakushudesk" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/usatore_gakushudesk.png",
    "parts": {
      "1":  {x: 0, y: 0, u: 64, v: 166},
      "nearest":  {x: 64, y: 0, u:90, v: 166},
      "2":  {x: 154, y: 0, u: 34, v: 166}
    }
  },
  "itemlabel_usatore" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_usatore.png",
  },
  "narihayao_usasensor" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/narihayao_usasensor.png",
  },
  "itemlabel_narihayao" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_narihayao.png",
  },
  "niza_mado" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/niza_mado.png",
    "parts": {
      "1":  {x: 0, y: 0, u: 94, v: 538},
      "nearest":  {x: 94, y: 0, u: 188, v: 538},
      "2":  {x: 281, y: 0, u: 95, v: 538}
    }
  },
  "itemlabel_niza" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_niza.png",
  },
  "chi_kun_stick" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/chiikun_stick.png",
  },
  "itemlabel_chi_kun" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_chiikun.png",
  },
  "inu_teaset" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/inu_teaset.png",
  },
  "itemlabel_inu" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_inu.png",
  },
  "chanja_hanako" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/chanja_hanako.png",
  },
  "itemlabel_chanja" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_chanja2.png",
  },
  

  "infolabel_summary" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/infolabel_summary.png"
  },
  "infolabel_titlekana" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/infolabel_titlekana.png"
  },
  "infolabel_author1" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/infolabel_author1.png"
  },
  "infolabel_author2" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/infolabel_author2.png"
  },

  "wall" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/wall.png"
  },
  "wall_l" : {
      "texture": "http://amaai-poconuts.com/c96/res/img/room/wall_l.png"
  },
  "wall_r" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/wall_r.png"
  },

  "chanja_rinhand" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/chanja_rinhand.png",
  },
  "itemlabel_chanja2" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_chanja2.png",
  },
};