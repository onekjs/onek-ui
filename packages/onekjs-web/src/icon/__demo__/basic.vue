<template>
  <o-icon-test></o-icon-test>
  <ul class="icon-list">
    <li v-for="item in icons" :key="item.icon_id" class="icon-item">
      <span class="icon-item-title">{{ item.name }}</span>
      <div class="icon-item-component">
        <o-icon :name="item.font_class" size="32" />
      </div>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const icons = ref([
  {
    icon_id: '28046148',
    name: 'upload',
    font_class: 'upload',
    unicode: 'e6f6',
    unicode_decimal: 59126
  },
  {
    icon_id: '28046149',
    name: 'left-double',
    font_class: 'left-double',
    unicode: 'e6f7',
    unicode_decimal: 59127
  },
  {
    icon_id: '28046150',
    name: 'right-double',
    font_class: 'right-double',
    unicode: 'e6f8',
    unicode_decimal: 59128
  },
  {
    icon_id: '28046151',
    name: 'left',
    font_class: 'left',
    unicode: 'e6f9',
    unicode_decimal: 59129
  },
  {
    icon_id: '28046152',
    name: 'right',
    font_class: 'right',
    unicode: 'e6fa',
    unicode_decimal: 59130
  },
  {
    icon_id: '28046153',
    name: 'down',
    font_class: 'down',
    unicode: 'e6fb',
    unicode_decimal: 59131
  },
  {
    icon_id: '28046154',
    name: 'up',
    font_class: 'up',
    unicode: 'e6fc',
    unicode_decimal: 59132
  },
  {
    icon_id: '28046177',
    name: 'ok',
    font_class: 'ok',
    unicode: 'e6fd',
    unicode_decimal: 59133
  },
  {
    icon_id: '28046178',
    name: 'search',
    font_class: 'search',
    unicode: 'e6fe',
    unicode_decimal: 59134
  },
  {
    icon_id: '28046179',
    name: 'edit-block-ring',
    font_class: 'edit-block-ring',
    unicode: 'e6ff',
    unicode_decimal: 59135
  },
  {
    icon_id: '28046180',
    name: 'download',
    font_class: 'download',
    unicode: 'e700',
    unicode_decimal: 59136
  },
  {
    icon_id: '28046181',
    name: 'close',
    font_class: 'close',
    unicode: 'e701',
    unicode_decimal: 59137
  },
  {
    icon_id: '28046182',
    name: 'plus',
    font_class: 'plus',
    unicode: 'e702',
    unicode_decimal: 59138
  },
  {
    icon_id: '28046183',
    name: 'loading',
    font_class: 'loading',
    unicode: 'e703',
    unicode_decimal: 59139
  },
  {
    icon_id: '28046184',
    name: 'eye-block',
    font_class: 'eye-block',
    unicode: 'e704',
    unicode_decimal: 59140
  },
  {
    icon_id: '28046185',
    name: 'close-eye-block',
    font_class: 'close-eye-block',
    unicode: 'e705',
    unicode_decimal: 59141
  },
  {
    icon_id: '28046186',
    name: 'up-block',
    font_class: 'up-block',
    unicode: 'e706',
    unicode_decimal: 59142
  },
  {
    icon_id: '28046187',
    name: 'left-block',
    font_class: 'left-block',
    unicode: 'e707',
    unicode_decimal: 59143
  },
  {
    icon_id: '28046188',
    name: 'upload-ring',
    font_class: 'upload-ring',
    unicode: 'e708',
    unicode_decimal: 59144
  },
  {
    icon_id: '28046189',
    name: 'position',
    font_class: 'position',
    unicode: 'e709',
    unicode_decimal: 59145
  },
  {
    icon_id: '28046190',
    name: 'ok-ring',
    font_class: 'ok-ring',
    unicode: 'e70a',
    unicode_decimal: 59146
  },
  {
    icon_id: '28046191',
    name: 'close-eye',
    font_class: 'close-eye',
    unicode: 'e70b',
    unicode_decimal: 59147
  },
  {
    icon_id: '28046192',
    name: 'download-ring',
    font_class: 'download-ring',
    unicode: 'e70c',
    unicode_decimal: 59148
  },
  {
    icon_id: '28046193',
    name: 'exclamation-point-ring',
    font_class: 'exclamation-point-ring',
    unicode: 'e70d',
    unicode_decimal: 59149
  },
  {
    icon_id: '28046195',
    name: 'info-ring',
    font_class: 'info-ring',
    unicode: 'e70e',
    unicode_decimal: 59150
  },
  {
    icon_id: '28046196',
    name: 'eye',
    font_class: 'eye',
    unicode: 'e70f',
    unicode_decimal: 59151
  },
  {
    icon_id: '28046197',
    name: 'close-ring',
    font_class: 'close-ring',
    unicode: 'e710',
    unicode_decimal: 59152
  },
  {
    icon_id: '28046198',
    name: 'question-mark-ring',
    font_class: 'question-mark-ring',
    unicode: 'e711',
    unicode_decimal: 59153
  },
  {
    icon_id: '28046200',
    name: 'down-block',
    font_class: 'down-block',
    unicode: 'e712',
    unicode_decimal: 59154
  },
  {
    icon_id: '28046201',
    name: 'classify-block',
    font_class: 'classify-block',
    unicode: 'e713',
    unicode_decimal: 59155
  },
  {
    icon_id: '28046202',
    name: 'right-block',
    font_class: 'right-block',
    unicode: 'e714',
    unicode_decimal: 59156
  },
  {
    icon_id: '28046203',
    name: 'position-block',
    font_class: 'position-block',
    unicode: 'e715',
    unicode_decimal: 59157
  },
  {
    icon_id: '28046204',
    name: 'page-block',
    font_class: 'page-block',
    unicode: 'e716',
    unicode_decimal: 59158
  },
  {
    icon_id: '28046206',
    name: 'copy-block',
    font_class: 'copy-block',
    unicode: 'e717',
    unicode_decimal: 59159
  },
  {
    icon_id: '28046207',
    name: 'question-mark-block',
    font_class: 'question-mark-block',
    unicode: 'e718',
    unicode_decimal: 59160
  },
  {
    icon_id: '28046208',
    name: 'copy-ring',
    font_class: 'copy-ring',
    unicode: 'e719',
    unicode_decimal: 59161
  },
  {
    icon_id: '28046209',
    name: 'info-block',
    font_class: 'info-block',
    unicode: 'e71a',
    unicode_decimal: 59162
  },
  {
    icon_id: '28046210',
    name: 'exclamation-point-block',
    font_class: 'exclamation-point-block',
    unicode: 'e71b',
    unicode_decimal: 59163
  },
  {
    icon_id: '28046211',
    name: 'close-block',
    font_class: 'close-block',
    unicode: 'e71c',
    unicode_decimal: 59164
  },
  {
    icon_id: '28046212',
    name: 'ok-block',
    font_class: 'ok-block',
    unicode: 'e71d',
    unicode_decimal: 59165
  },
  {
    icon_id: '28046219',
    name: 'fallback',
    font_class: 'fallback',
    unicode: 'e71e',
    unicode_decimal: 59166
  },
  {
    icon_id: '28046222',
    name: 'callback',
    font_class: 'callback',
    unicode: 'e71f',
    unicode_decimal: 59167
  },
  {
    icon_id: '28046226',
    name: 'save-ring',
    font_class: 'seave-ring',
    unicode: 'e720',
    unicode_decimal: 59168
  },
  {
    icon_id: '28046227',
    name: 'drawing-board-block',
    font_class: 'drawing-board-block',
    unicode: 'e721',
    unicode_decimal: 59169
  },
  {
    icon_id: '28046228',
    name: 'origin-array',
    font_class: 'origin-array',
    unicode: 'e722',
    unicode_decimal: 59170
  },
  {
    icon_id: '28046229',
    name: 'save',
    font_class: 'seave',
    unicode: 'e723',
    unicode_decimal: 59171
  },
  {
    icon_id: '28046230',
    name: 'filtrate',
    font_class: 'filtrate',
    unicode: 'e724',
    unicode_decimal: 59172
  },
  {
    icon_id: '28046232',
    name: 'component',
    font_class: 'component',
    unicode: 'e725',
    unicode_decimal: 59173
  },
  {
    icon_id: '28046233',
    name: 'drawing-board',
    font_class: 'drawing-board',
    unicode: 'e726',
    unicode_decimal: 59174
  },
  {
    icon_id: '28046234',
    name: 'switch',
    font_class: 'switch',
    unicode: 'e727',
    unicode_decimal: 59175
  },
  {
    icon_id: '28046246',
    name: 'share',
    font_class: 'share',
    unicode: 'e728',
    unicode_decimal: 59176
  },
  {
    icon_id: '28046247',
    name: 'batch-choice',
    font_class: 'batch-choice',
    unicode: 'e729',
    unicode_decimal: 59177
  },
  {
    icon_id: '28046248',
    name: 'batch-choice-block',
    font_class: 'batch-choice-block',
    unicode: 'e72a',
    unicode_decimal: 59178
  },
  {
    icon_id: '28046250',
    name: 'code',
    font_class: 'code',
    unicode: 'e72b',
    unicode_decimal: 59179
  },
  {
    icon_id: '28046251',
    name: 'switch-right-double',
    font_class: 'switch-right-double',
    unicode: 'e72c',
    unicode_decimal: 59180
  },
  {
    icon_id: '28046252',
    name: 'sort',
    font_class: 'sort',
    unicode: 'e72d',
    unicode_decimal: 59181
  },
  {
    icon_id: '28046253',
    name: 'switch-left',
    font_class: 'switch-left',
    unicode: 'e72e',
    unicode_decimal: 59182
  },
  {
    icon_id: '28046254',
    name: 'switch-left-double',
    font_class: 'switch-left-double',
    unicode: 'e72f',
    unicode_decimal: 59183
  },
  {
    icon_id: '28046255',
    name: 'gohome',
    font_class: 'gohome',
    unicode: 'e730',
    unicode_decimal: 59184
  },
  {
    icon_id: '28046256',
    name: 'edit',
    font_class: 'edit',
    unicode: 'e731',
    unicode_decimal: 59185
  },
  {
    icon_id: '28046257',
    name: 'classify',
    font_class: 'classify',
    unicode: 'e732',
    unicode_decimal: 59186
  },
  {
    icon_id: '28046258',
    name: 'switch-right',
    font_class: 'switch-right',
    unicode: 'e733',
    unicode_decimal: 59187
  },
  {
    icon_id: '28046260',
    name: 'page',
    font_class: 'page',
    unicode: 'e734',
    unicode_decimal: 59188
  },
  {
    icon_id: '28208533',
    name: 'pc',
    font_class: 'pc',
    unicode: 'e735',
    unicode_decimal: 59189
  },
  {
    icon_id: '28208534',
    name: 'mobile',
    font_class: 'mobile',
    unicode: 'e736',
    unicode_decimal: 59190
  },
  {
    icon_id: '28283873',
    name: 'image-block',
    font_class: 'image-block',
    unicode: 'e737',
    unicode_decimal: 59191
  },
  {
    icon_id: '28283874',
    name: 'image',
    font_class: 'image',
    unicode: 'e738',
    unicode_decimal: 59192
  },
  {
    icon_id: '28355837',
    name: 'minus',
    font_class: 'minus',
    unicode: 'e739',
    unicode_decimal: 59193
  },
  {
    icon_id: '29872343',
    name: 'user',
    font_class: 'user',
    unicode: 'e73a',
    unicode_decimal: 59194
  },
  {
    icon_id: '29872344',
    name: 'user-ring-block',
    font_class: 'user-ring-block',
    unicode: 'e73b',
    unicode_decimal: 59195
  },
  {
    icon_id: '29872348',
    name: 'user-block',
    font_class: 'user-block',
    unicode: 'e73c',
    unicode_decimal: 59196
  },
  {
    icon_id: '33083667',
    name: 'full-seen',
    font_class: 'full-seen',
    unicode: 'e73d',
    unicode_decimal: 59197
  },
  {
    icon_id: '33090780',
    name: 'switch-down',
    font_class: 'switch-down',
    unicode: 'e73e',
    unicode_decimal: 59198
  },
  {
    icon_id: '33090781',
    name: 'switch-up-r',
    font_class: 'switch-up-r',
    unicode: 'e73f',
    unicode_decimal: 59199
  },
  {
    icon_id: '33090782',
    name: 'message-block-point',
    font_class: 'message-block-point',
    unicode: 'e740',
    unicode_decimal: 59200
  },
  {
    icon_id: '33090784',
    name: 'message-block',
    font_class: 'message-black',
    unicode: 'e741',
    unicode_decimal: 59201
  },
  {
    icon_id: '33090785',
    name: 'message-point',
    font_class: 'message-point',
    unicode: 'e742',
    unicode_decimal: 59202
  },
  {
    icon_id: '33090786',
    name: 'switch-up',
    font_class: 'switch-up',
    unicode: 'e743',
    unicode_decimal: 59203
  },
  {
    icon_id: '33090787',
    name: 'message',
    font_class: 'message',
    unicode: 'e744',
    unicode_decimal: 59204
  },
  {
    icon_id: '33090788',
    name: 'share-other-block',
    font_class: 'share-other-block',
    unicode: 'e745',
    unicode_decimal: 59205
  },
  {
    icon_id: '33090789',
    name: 'switch-down-r',
    font_class: 'switch-down-r',
    unicode: 'e746',
    unicode_decimal: 59206
  },
  {
    icon_id: '33090790',
    name: 'notice-block',
    font_class: 'notice-block',
    unicode: 'e747',
    unicode_decimal: 59207
  },
  {
    icon_id: '33090791',
    name: 'copy',
    font_class: 'copy',
    unicode: 'e748',
    unicode_decimal: 59208
  },
  {
    icon_id: '33090792',
    name: 'add',
    font_class: 'add',
    unicode: 'e749',
    unicode_decimal: 59209
  },
  {
    icon_id: '33090793',
    name: 'sort-up',
    font_class: 'sort-up',
    unicode: 'e74a',
    unicode_decimal: 59210
  },
  {
    icon_id: '33090794',
    name: 'share-other',
    font_class: 'share-other',
    unicode: 'e74b',
    unicode_decimal: 59211
  },
  {
    icon_id: '33090796',
    name: 'sort-down',
    font_class: 'sort-down',
    unicode: 'e74c',
    unicode_decimal: 59212
  },
  {
    icon_id: '33090797',
    name: 'upload-cloud',
    font_class: 'upload-cloud',
    unicode: 'e74d',
    unicode_decimal: 59213
  },
  {
    icon_id: '33090798',
    name: 'notice',
    font_class: 'notice',
    unicode: 'e74e',
    unicode_decimal: 59214
  },
  {
    icon_id: '33090799',
    name: 'folder',
    font_class: 'folder',
    unicode: 'e74f',
    unicode_decimal: 59215
  },
  {
    icon_id: '33090800',
    name: 'folder-block',
    font_class: 'folder-block',
    unicode: 'e750',
    unicode_decimal: 59216
  },
  {
    icon_id: '33090801',
    name: 'delete',
    font_class: 'delete',
    unicode: 'e751',
    unicode_decimal: 59217
  },
  {
    icon_id: '33090806',
    name: 'delete-block',
    font_class: 'delete-block',
    unicode: 'e752',
    unicode_decimal: 59218
  },
  {
    icon_id: '33090945',
    name: 'set-block',
    font_class: 'set-block',
    unicode: 'e753',
    unicode_decimal: 59219
  },
  {
    icon_id: '33090946',
    name: 'set',
    font_class: 'set',
    unicode: 'e754',
    unicode_decimal: 59220
  },
  {
    icon_id: '33335176',
    name: 'service-block',
    font_class: 'service-block',
    unicode: 'e755',
    unicode_decimal: 59221
  },
  {
    icon_id: '33335177',
    name: 'service',
    font_class: 'service',
    unicode: 'e756',
    unicode_decimal: 59222
  },
  {
    icon_id: '33522975',
    name: 'I',
    font_class: 'I',
    unicode: 'e757',
    unicode_decimal: 59223
  },
  {
    icon_id: '33522976',
    name: 'U',
    font_class: 'U',
    unicode: 'e758',
    unicode_decimal: 59224
  },
  {
    icon_id: '33522977',
    name: 'B',
    font_class: 'B',
    unicode: 'e759',
    unicode_decimal: 59225
  },
  {
    icon_id: '33646598',
    name: 'order-block',
    font_class: 'order-block',
    unicode: 'e75a',
    unicode_decimal: 59226
  },
  {
    icon_id: '33646599',
    name: 'letter',
    font_class: 'letter',
    unicode: 'e75b',
    unicode_decimal: 59227
  },
  {
    icon_id: '33646600',
    name: 'color-block',
    font_class: 'color-block',
    unicode: 'e75c',
    unicode_decimal: 59228
  },
  {
    icon_id: '33646601',
    name: 'letter-block',
    font_class: 'letter-block',
    unicode: 'e75d',
    unicode_decimal: 59229
  },
  {
    icon_id: '33646602',
    name: 'pen',
    font_class: 'pen',
    unicode: 'e75e',
    unicode_decimal: 59230
  },
  {
    icon_id: '33646603',
    name: 'group-block',
    font_class: 'group-block',
    unicode: 'e75f',
    unicode_decimal: 59231
  },
  {
    icon_id: '33646604',
    name: 'crown-block',
    font_class: 'crown-block',
    unicode: 'e760',
    unicode_decimal: 59232
  },
  {
    icon_id: '33692386',
    name: 'link',
    font_class: 'link',
    unicode: 'e761',
    unicode_decimal: 59233
  },
  {
    icon_id: '33712176',
    name: 'exchange',
    font_class: 'exchange',
    unicode: 'e762',
    unicode_decimal: 59234
  },
  {
    icon_id: '33727687',
    name: 'lock-open-block',
    font_class: 'lock-open-block',
    unicode: 'e763',
    unicode_decimal: 59235
  },
  {
    icon_id: '33727688',
    name: 'lock-block',
    font_class: 'lock-block',
    unicode: 'e764',
    unicode_decimal: 59236
  },
  {
    icon_id: '33727689',
    name: 'lock-open',
    font_class: 'lock-open',
    unicode: 'e765',
    unicode_decimal: 59237
  },
  {
    icon_id: '33727690',
    name: 'lock',
    font_class: 'lock',
    unicode: 'e766',
    unicode_decimal: 59238
  },
  {
    icon_id: '33727745',
    name: 'book-block',
    font_class: 'book-block',
    unicode: 'e767',
    unicode_decimal: 59239
  },
  {
    icon_id: '33727746',
    name: 'book',
    font_class: 'book',
    unicode: 'e768',
    unicode_decimal: 59240
  },
  {
    icon_id: '33727747',
    name: 'order',
    font_class: 'order',
    unicode: 'e769',
    unicode_decimal: 59241
  },
  {
    icon_id: '33745823',
    name: 'txt-block',
    font_class: 'txt-block',
    unicode: 'e76a',
    unicode_decimal: 59242
  },
  {
    icon_id: '33745824',
    name: 'word-block',
    font_class: 'word-block',
    unicode: 'e76b',
    unicode_decimal: 59243
  },
  {
    icon_id: '33745825',
    name: 'txt',
    font_class: 'txt',
    unicode: 'e76c',
    unicode_decimal: 59244
  },
  {
    icon_id: '33745826',
    name: 'excel-block',
    font_class: 'excel-block',
    unicode: 'e76d',
    unicode_decimal: 59245
  },
  {
    icon_id: '33745827',
    name: 'word',
    font_class: 'word',
    unicode: 'e76e',
    unicode_decimal: 59246
  },
  {
    icon_id: '33745828',
    name: 'excel',
    font_class: 'excel',
    unicode: 'e76f',
    unicode_decimal: 59247
  },
  {
    icon_id: '33816619',
    name: 'point',
    font_class: 'point',
    unicode: 'e770',
    unicode_decimal: 59248
  },
  {
    icon_id: '33835114',
    name: 'roller',
    font_class: 'roller',
    unicode: 'e771',
    unicode_decimal: 59249
  },
  {
    icon_id: '33836791',
    name: 'A',
    font_class: 'A',
    unicode: 'e772',
    unicode_decimal: 59250
  },
  {
    icon_id: '33836792',
    name: 'eraser',
    font_class: 'eraser',
    unicode: 'e773',
    unicode_decimal: 59251
  },
  {
    icon_id: '33836793',
    name: 'S',
    font_class: 'S',
    unicode: 'e774',
    unicode_decimal: 59252
  },
  {
    icon_id: '33836794',
    name: 'barrel-block',
    font_class: 'barrel-block',
    unicode: 'e775',
    unicode_decimal: 59253
  },
  {
    icon_id: '33836795',
    name: 'barrel',
    font_class: 'barrel',
    unicode: 'e776',
    unicode_decimal: 59254
  },
  {
    icon_id: '33947963',
    name: 'bookmark-block',
    font_class: 'bookmark-block',
    unicode: 'e777',
    unicode_decimal: 59255
  },
  {
    icon_id: '33947964',
    name: 'bookmark',
    font_class: 'bookmark',
    unicode: 'e778',
    unicode_decimal: 59256
  },
  {
    icon_id: '33972805',
    name: 'contraction',
    font_class: 'contraction',
    unicode: 'e779',
    unicode_decimal: 59257
  },
  {
    icon_id: '33972806',
    name: 'stretch',
    font_class: 'stretch',
    unicode: 'e77a',
    unicode_decimal: 59258
  },
  {
    icon_id: '33972807',
    name: 'correlation',
    font_class: 'correlation',
    unicode: 'e77b',
    unicode_decimal: 59259
  },
  {
    icon_id: '34067447',
    name: 'expansion',
    font_class: 'expansion',
    unicode: 'e77c',
    unicode_decimal: 59260
  },
  {
    icon_id: '34067448',
    name: 'put-away',
    font_class: 'put-away',
    unicode: 'e77d',
    unicode_decimal: 59261
  },
  {
    icon_id: '34068328',
    name: 'roller-block',
    font_class: 'roller-block',
    unicode: 'e77e',
    unicode_decimal: 59262
  },
  {
    icon_id: '34068361',
    name: 'gear-block',
    font_class: 'gear-block',
    unicode: 'e77f',
    unicode_decimal: 59263
  },
  {
    icon_id: '34068362',
    name: 'gear',
    font_class: 'gear',
    unicode: 'e780',
    unicode_decimal: 59264
  },
  {
    icon_id: '34070235',
    name: 'feed',
    font_class: 'feed',
    unicode: 'e781',
    unicode_decimal: 59265
  },
  {
    icon_id: '34070339',
    name: 'home-block',
    font_class: 'home-block',
    unicode: 'e782',
    unicode_decimal: 59266
  },
  {
    icon_id: '34070340',
    name: 'home',
    font_class: 'home',
    unicode: 'e783',
    unicode_decimal: 59267
  },
  {
    icon_id: '34761482',
    name: 'group',
    font_class: 'group',
    unicode: 'e784',
    unicode_decimal: 59268
  },
  {
    icon_id: '35666734',
    name: 'drawing-board',
    font_class: 'drawing-board1',
    unicode: 'e785',
    unicode_decimal: 59269
  }
]);
</script>
<style scoped lang="less">
.icon-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid rgb(216, 214, 214);
  border-left: 1px solid rgb(216, 214, 214);
}
.icon-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  width: 20%;
  height: 140px;
  border-right: 1px solid rgb(216, 214, 214);
  border-bottom: 1px solid rgb(216, 214, 214);
  margin-top: 0px !important;
  cursor: pointer;
  transition: all 0.2s ease;
  &-title {
    font-size: 14px;
  }

  &-component {
    margin-top: 15px;
  }
  &:hover {
    background-color: rgb(236, 235, 235);
  }
}
</style>
