import { dpr, dpr_a4 } from './index.js'

// img_index == 0 不显示数字标签
export default {
  page_id: 0,
  page_index: 17,
  owner_type: 2,
  bg_img:
    'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-album-bg/2x/17.png',
  bg_img_a4:
    'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-album-bg/a4/17.jpg',
  contents: [
    {
      content_id: '1',
      content: '',
      content_type: 1,
      input_type: 'textarea',
      position: {
        position: 'absolute',
        top: `${86 * dpr}rpx`,
        left: `${48 * dpr}rpx`,
        fontSize: `${8 * dpr}rpx`,
        width: `${215 * dpr}rpx`,
        color: '#333'
      },
      position_a4: {
        top: `${86 * dpr_a4}`,
        left: `${48 * dpr_a4}`,
        fontSize: `${8 * dpr_a4}`,
        lineHeight: `${14 * dpr_a4}`,
        width: `${215 * dpr_a4}`,
        color: '#333'
      }
    },
    {
      content_id: '2',
      content:
        'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-ablum-test.png',
      content_type: 2,
      img_index: 0,
      position: {
        position: 'absolute',
        top: `${214 * dpr}rpx`,
        left: `${48 * dpr}rpx`,
        width: `${215 * dpr}rpx`,
        height: `${160 * dpr}rpx`
      },
      position_a4: {
        top: `${214 * dpr_a4}`,
        left: `${48 * dpr_a4}`,
        fontSize: `${8 * dpr_a4}`,
        width: `${215 * dpr_a4}`,
        height: `${160 * dpr_a4}`
      }
    }
  ]
}
