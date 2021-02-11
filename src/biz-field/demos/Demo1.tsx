/**
 * title: 基础用法
 */

import React from "react";
import "moment/locale/zh-cn";
import { Descriptions } from "antd";
import { BizField } from "antd-more";

// 枚举数据
const ApproveStatus = [
  {
    value: 1,
    name: '审核中',
    badge: {
      status: "processing"
    },
    tag: {
      alias: "待审核",
      color: "orange"
    }
  },
  {
    value: 2,
    name: '审核通过',
    text: {
      style: {
        color: "green"
      }
    },
    badge: {
      status: "success"
    },
    tag: {
      color: "green"
    }
  },
  {
    value: 3,
    name: '审核不通过',
    text: {
      style: {
        color: "red"
      }
    },
    badge: {
      status: "error"
    },
    tag: {
      color: "red"
    }
  },
];

export default () => {
  return (
    <>
      <Descriptions>
        <Descriptions.Item label="空字符串">
          <BizField value="" valueType="text" />
        </Descriptions.Item>
        <Descriptions.Item label="文本">
          <BizField value="这是一段文本" valueType="text" />
          、
          <BizField value="带颜色和文字大小" valueType="text" color="red" size={13} />
        </Descriptions.Item>
        <Descriptions.Item label="金额">
          <BizField value={100} valueType="money" />
          、
          <BizField value={100} valueType="money" prefix="¥" />
          、
          <BizField value={100} valueType="money" prefix="¥" color="red" />
        </Descriptions.Item>
        <Descriptions.Item label="进度条">
          <BizField value={40} valueType="progress" />
        </Descriptions.Item>
        <Descriptions.Item label="百分比">
          <BizField value={10} valueType="percent" />
        </Descriptions.Item>
        <Descriptions.Item label="百分比颜色符号">
          <BizField value={-10} valueType="percent" showSymbol showColor />
          <BizField value={0} valueType="percent" showSymbol showColor />
          <BizField value={10} valueType="percent" showSymbol showColor />
        </Descriptions.Item>
        <Descriptions.Item label="序列号">
          <BizField value={0} valueType="index" />
          <BizField value={1} valueType="index" />
          <BizField value={2} valueType="index" />
          <BizField value={3} valueType="index" />
          <BizField value={9} valueType="index" />
        </Descriptions.Item>
        <Descriptions.Item label="序列号(圆)">
          <BizField value={0} valueType="indexBorder" />
          <BizField value={1} valueType="indexBorder" />
          <BizField value={2} valueType="indexBorder" />
          <BizField value={3} valueType="indexBorder" />
          <BizField value={9} valueType="indexBorder" />
        </Descriptions.Item>
        <Descriptions.Item label="颜色">
          <BizField value="red" valueType="color" />
        </Descriptions.Item>
        <Descriptions.Item label="颜色带文本" span={3}>
          <BizField value="blue" valueType="color" showText />
        </Descriptions.Item>
        <Descriptions.Item label="图片">
          <BizField value="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" valueType="image" />
        </Descriptions.Item>
        <Descriptions.Item label="图片（名称）">
          <BizField value={{ src: "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg", name: "测试名称测试名称测试名称" }} valueType="image" />
        </Descriptions.Item>
        <Descriptions.Item label="图片(边框/名称)">
          <BizField value={{ src: "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg", name: "测试名称" }} valueType="image" bordered />
        </Descriptions.Item>
        <Descriptions.Item label="多张图片">
          <BizField value={["https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg", "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"]} valueType="image" />
        </Descriptions.Item>
        <Descriptions.Item label="多张图片(边框/名称)" span={2}>
          <BizField value={[{ src: "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg", name: "测试名称" }, { src: "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg", name: "测试名称测试名称测试名称测试名称" }]} valueType="image" bordered />
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="日期">
        <Descriptions.Item label="日期">
          <BizField value="2020-10-10" valueType="date" />
        </Descriptions.Item>
        <Descriptions.Item label="日期时间">
          <BizField value="2020-10-10" valueType="dateTime" />
        </Descriptions.Item>
        <Descriptions.Item label="周">
          <BizField value="2020-10-10" valueType="dateWeek" />
        </Descriptions.Item>
        <Descriptions.Item label="月">
          <BizField value="2020-10-10" valueType="dateMonth" />
        </Descriptions.Item>
        <Descriptions.Item label="季">
          <BizField value="2020-10-10" valueType="dateQuarter" />
        </Descriptions.Item>
        <Descriptions.Item label="年">
          <BizField value="2020-10-10" valueType="dateYear" />
        </Descriptions.Item>
        <Descriptions.Item label="时间">
          <BizField value="10:00:00" valueType="time" />
        </Descriptions.Item>
        <Descriptions.Item label="时间区间">
          <BizField value={["10:00:00", "12:00:00"]} valueType="timeRange" />
        </Descriptions.Item>
        <Descriptions.Item label="相对当前时间">
          <BizField value="2020-10-10" valueType="fromNow" />
        </Descriptions.Item>
        <Descriptions.Item label="日期区间">
          <BizField value={["2020-10-10", "2020-12-12"]} valueType="dateRange" />
        </Descriptions.Item>
        <Descriptions.Item label="日期时间区间">
          <BizField value={["2020-10-10", "2020-12-12"]} valueType="dateTimeRange" />
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="枚举">
        <Descriptions.Item label="文本">
          <BizField value={1} valueType="enum" valueEnum={ApproveStatus} />
        </Descriptions.Item>
        <Descriptions.Item label="标签">
          <BizField value={1} valueType="enumTag" valueEnum={ApproveStatus} />
        </Descriptions.Item>
        <Descriptions.Item label="徽章">
          <BizField value={1} valueType="enumBadge" valueEnum={ApproveStatus} />
        </Descriptions.Item>
        <Descriptions.Item label="多个文本">
          <BizField value={[1, 2]} valueType="enum" valueEnum={ApproveStatus} />
        </Descriptions.Item>
        <Descriptions.Item label="多个标签">
          <BizField value={[1, 2]} valueType="enumTag" valueEnum={ApproveStatus} />
        </Descriptions.Item>
        <Descriptions.Item label="多个徽章">
          <BizField value={[1, 2]} valueType="enumBadge" valueEnum={ApproveStatus} />
        </Descriptions.Item>
      </Descriptions>
    </>
  )
}