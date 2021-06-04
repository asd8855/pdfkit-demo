import { dpr, dpr_a4 } from './index.js'

export default {
  page_id: 0,
  page_index: 3,
  owner_type: 1,
  bg_img:
    'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-album-bg/2x/3.png',
  bg_img_a4:
    'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-album-bg/a4/3.jpg',
  contents: [
    {
      content_id: '1',
      content: '西安蝉鸣幼儿园',
      content_type: 1,
      disabled: true,
      input_type: 'text',
      position: {
        position: 'absolute',
        top: `${265 * dpr}rpx`,
        left: `${48 * dpr}rpx`,
        fontSize: `${10 * dpr}rpx`,
        fontWeight: 'bold',
        color: '#333'
      },
      position_a4: {
        top: 265 * dpr_a4,
        left: 48 * dpr_a4,
        fontSize: 10 * dpr_a4,
        fontWeight: 'bold',
        lineHeight: 14 * dpr_a4,
        width: 215 * dpr_a4,
        color: '#333'
      }
    },
    {
      content_id: '2',
      label: '',
      content:
        '幼儿园以打造“和谐幸福家园”为愿景，以“让教师成为‘家’的主人,让孩子成为幼儿园‘家’为主体”的办学理念，以“健康活泼、文明乐群、自主自信、创造表现”为培养目标，建设“家”文化的快乐家园',
      content_type: 1,
      input_type: 'textarea',
      position: {
        position: 'absolute',
        top: `${283 * dpr}rpx`,
        left: `${48 * dpr}rpx`,
        fontSize: `${8 * dpr}rpx`,
        width: `${215 * dpr}rpx`,
        color: '#333'
      },
      position_a4: {
        top: 283 * dpr_a4,
        left: 48 * dpr_a4,
        fontSize: 8 * dpr_a4,
        lineHeight: 18 * dpr_a4,
        width: 215 * dpr_a4,
        color: '#333'
      }
    },
    {
      content_id: '3',
      content:
        'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-ablum-test.png',
      content_type: 2,
      img_index: 0,
      position: {
        position: 'absolute',
        top: `${89 * dpr}rpx`,
        left: `${48 * dpr}rpx`,
        width: `${215 * dpr}rpx`,
        height: `${160 * dpr}rpx`
      },
      position_a4: {
        top: 89 * dpr_a4,
        left: 48 * dpr_a4,
        width: 215 * dpr_a4,
        height: 160 * dpr_a4
      }
    }
  ]
}
