import {dpr, dpr_a4} from './index.js'

export default {
  page_id: 0,
  page_index: 1,
  owner_type: 0,
  bg_img:
    'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-album-bg/2x/1.png',
  bg_img_a4:
    'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-album-bg/a4/1.jpg',
  contents: [
    {
      content_id: '1',
      content: 'pdfkitdemo',
      content_type: 1,
      position: {
        position: 'absolute',
        top: `${160 * dpr}rpx`,
        left: `${48 * dpr}rpx`,
        fontSize: `${9 * dpr}rpx`,
        letterSpacing: `${4 * dpr}rpx`,
        width: `${215 * 2}rpx`,
        color: '#ffffff',
        textAlign: 'center'
      },
      position_a4: {
        top: 160 * dpr_a4,
        left: 48 * dpr_a4,
        fontSize: 9 * dpr_a4,
        lineHeight: 14 * dpr_a4,
        width: 215 * dpr_a4,
        characterSpacing: 4 * dpr_a4,
        fontWeight: 'regular',
        color: '#ffffff',
        textAlign: 'center'
      }
    }
  ]
}
