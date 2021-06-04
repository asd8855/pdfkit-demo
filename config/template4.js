import { dpr, dpr_a4 } from './index.js'

export default {
  page_id: 0,
  page_index: 4,
  owner_type: 1,
  bg_img:
    'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-album-bg/2x/4.png',
  bg_img_a4:
    'https://xuejj-pro-storage.oss-cn-hangzhou.aliyuncs.com/class-album/assets/growth-album-bg/a4/4.jpg',
  contents: [
    {
      content_id: '2',
      content:
        '亲爱的孩子：恭喜你顺利完成本学期的课程，在这里，你学会了团结、友爱，学会了唱歌、舞蹈，幼儿园的每个角落都记录下了你的快乐，老师希望你能够健康快乐的成长，成为一名优秀的学生。',
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
        top: 86 * dpr_a4,
        left: 48 * dpr_a4,
        fontSize: 8 * dpr_a4,
        lineHeight: 14 * dpr_a4,
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
        top: `${214 * dpr}rpx`,
        left: `${48 * dpr}rpx`,
        width: `${215 * dpr}rpx`,
        height: `${160 * dpr}rpx`
      },
      position_a4: {
        top: 214 * dpr_a4,
        left: 48 * dpr_a4,
        width: 215 * dpr_a4,
        height: 160 * dpr_a4
      }
    }
  ]
}
