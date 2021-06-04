import { dpr, dpr_a4 } from './index.js'

export default {
  page_id: 0,
  page_index: 10,
  owner_type: 2,
  bg_img:
    'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-album-bg/2x/10.png',
  bg_img_a4:
    'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-album-bg/a4/10.jpg',
  contents: [
    {
      content_id: '1',
      content: '',
      content_type: 1,
      input_type: 'text',
      position: {
        position: 'absolute',
        color: '#333',
        fontWeight: 'bold',
        top: `${48 * dpr}rpx`,
        left: `${48 * dpr}rpx`,
        fontSize: `${14 * dpr}rpx`,
        width: `${215 * dpr}rpx`
      },
      position_a4: {
        top: `${48 * dpr_a4}`,
        left: `${48 * dpr_a4}`,
        fontWeight: 'bold',
        fontSize: `${14 * dpr_a4}`,
        lineHeight: `${14 * dpr_a4}`,
        width: `${215 * dpr_a4}`,
        color: '#333'
      }
    },
    {
      content_id: '2',
      content: '',
      content_type: 1,
      input_type: 'textarea',
      position: {
        position: 'absolute',
        top: `${74 * dpr}rpx`,
        left: `${48 * dpr}rpx`,
        fontSize: `${8 * dpr}rpx`,
        width: `${215 * dpr}rpx`,
        color: '#333'
      },
      position_a4: {
        top: `${74 * dpr_a4}`,
        left: `${48 * dpr_a4}`,
        fontSize: `${8 * dpr_a4}`,
        lineHeight: `${14 * dpr_a4}`,
        width: `${215 * dpr_a4}`,
        color: '#333'
      }
    },
    {
      content_id: '3',
      content:
        'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-ablum-test.png',
      content_type: 2,
      img_index: 1,
      position: {
        position: 'absolute',
        top: `${183 * dpr}rpx`,
        left: `${48 * dpr}rpx`,
        width: `${144 * dpr}rpx`,
        height: `${119 * dpr}rpx`
      },
      position_a4: {
        top: `${183 * dpr_a4}`,
        left: `${48 * dpr_a4}`,
        width: `${144 * dpr_a4}`,
        height: `${119 * dpr_a4}`
      }
    },
    {
      content_id: '4',
      content:
        'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-ablum-test.png',
      content_type: 2,
      img_index: 2,
      position: {
        position: 'absolute',
        top: `${262 * dpr}rpx`,
        left: `${143 * dpr}rpx`,
        width: `${120 * dpr}rpx`,
        height: `${100 * dpr}rpx`,
        border: 'solid 6rpx #fff'
      },
      position_a4: {
        top: `${262 * dpr_a4}`,
        left: `${143 * dpr_a4}`,
        width: `${120 * dpr_a4}`,
        height: `${100 * dpr_a4}`,
        border_top: `${262 * dpr_a4}`,
        border_left: `${143 * dpr_a4}`,
        border_width: (120 + 6) * dpr_a4,
        border_height: (100 + 6) * dpr_a4,
        lineWidth: 6 * dpr_a4
      }
    }
  ]
}
