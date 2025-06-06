const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')
const CONFIG = require('../config-json.js')

let feedList = [

  // {
  //   title: '動畫小坑谷',
  //   feedID: 'valleylife351',
  //   homepageURL: 'https://www.youtube.com/channel/UCbCb-ZUoKwQ8vcRbrH2nE0Q',
  //   itemFilters: [
  //     ItemFiltersPreset.between1minTo10Min,
  //   ] // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
  // },
  // {
  //   title: '番茄没有酱聊AI繪圖',
  //   feedID: 'lsm0315',
  //   homepageURL: 'https://www.youtube.com/channel/UCoYbSADuNZvm99BLxqtImYQ',
  //   itemFilters: [
  //     ItemFiltersPreset.between3minTo30Min,
  //   ] // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
  // },
  {
    title: '敖厂长',
    feedID: 'hawkaoaoful',
    homepageURL: 'https://www.youtube.com/channel/UCCkMW93Am1pLfk2nZFKAmbQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'Gamker攻壳官方频道',
    feedID: 'Gamker-YT',
    homepageURL: 'https://www.youtube.com/channel/UCLgGLSFMZQB8c0WGcwE49Gw',
    itemFilters: [
      ItemFiltersPreset.between6minTo60Min,
      (item) => { return ((item.title.indexOf('【就知道玩遊戲') > -1)) }
    ]
  },
  {
    title: '公視P#新聞實驗室',
    feedID: 'Ppsharp_newslab',
    homepageURL: 'https://www.youtube.com/channel/UCMDcOT4z7GS1SRGG2g7z43g',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'Leonard',
    feedID: 'leonard2834',
    homepageURL: 'https://www.youtube.com/channel/UC1mx_wcSHtfpLk5N_zY0TRg',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '林辰Buchi',
    feedID: 'LinBuchi',
    homepageURL: 'https://www.youtube.com/channel/UCgHUl1pwUVfrX8QotB-t2gQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },


  // 以上5個==================

  
  {
    title: 'RICO 作 料理',
    feedID: 'RICOTASTY',
    homepageURL: 'https://www.youtube.com/channel/UCHV8lZJsXdW8lOFr2z8WPcg',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },

  {
    title: 'Leya蕾雅 聊 遊戲',
    feedID: 'Leya',
    homepageURL: 'https://www.youtube.com/channel/UCiXJjvsRQEyT06x3YUwueVw',
    // itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '森纳映画 聊 遊戲不止',
    feedID: 'SONAR606',
    homepageURL: 'https://www.youtube.com/channel/UCDNeEBgigHHGtJJOpHSnadA',
    // itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
    
  // {
  //   title: '想做教育家的Klaus',
  //   feedID: 'klaus6510',
  //   homepageURL: 'https://www.youtube.com/channel/UCZ4NwvuGYgFyjnRRJekdnHw',
  //   itemFilters: ItemFiltersPreset.between3minTo30Min,
  // },

  {
    title: 'AKU遊戲窩',
    feedID: 'AKUGAMEChannel',
    homepageURL: 'https://www.youtube.com/channel/UCC5DpD05rp_TJapb3jDEAmQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'FUN科技',
    feedID: 'FUN-rp3dq',
    homepageURL: 'https://www.youtube.com/channel/UCE7UCIEDIbinkMnNOtSyqzg',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
]

// 

// --------------------------------------

if (CONFIG.debug) {
  feedList = [
    {
      title: 'AZA宿 聊 動漫音樂',
      feedID: 'azasu666',
      homepageURL: 'https://www.youtube.com/channel/UChVPN84LFe_TOjYwJIDw3Sw',
      itemFilters: ItemFiltersPreset.between3minTo30Min,
    },
  ]
}


module.exports = feedList
