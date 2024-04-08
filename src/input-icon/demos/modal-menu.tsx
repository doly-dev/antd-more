import * as React from 'react';
import { Button, Row, Col, TreeSelect } from 'antd';
import {
  BizForm,
  ModalForm,
  BizFormItem,
  BizFormItemRadio,
  BizFormItemInput,
  BizFormItemNumber,
  InputIcon,
  InputIconsMap
} from 'antd-more';
import { MenuType, HiddenMenu, CacheMenu } from './type';

// 菜单列表
const treeData = [
  {
    title: '顶级类目',
    // value: null,
    value: '',
    children: [
      {
        title: '首页',
        value: 1
      },
      {
        title: '系统管理',
        value: 2,
        children: [
          {
            title: '用户管理',
            value: 3
          },
          {
            title: '角色管理',
            value: 4
          }
        ]
      }
    ]
  }
];

// 菜单类型
const menuTypeOptions = [
  {
    label: '菜单',
    value: MenuType.Menu
  },
  {
    label: '按钮',
    value: MenuType.Action
  }
];

// 菜单可见
const hiddenMenuOptions = [
  {
    label: '是',
    value: HiddenMenu.Yes
  },
  {
    label: '否',
    value: HiddenMenu.No
  }
];

// 菜单缓存
const cacheMenuOptions = [
  {
    label: '是',
    value: CacheMenu.Yes
  },
  {
    label: '否',
    value: CacheMenu.No
  }
];

const Demo = () => {
  const [form] = BizForm.useForm();
  const [currentMenuType, setCurrentMenuType] = React.useState(MenuType.Menu);
  const menuTypeName =
    menuTypeOptions.find((item) => item.value === (form.getFieldValue('menuType') || MenuType.Menu))
      ?.label || '';
  const onValuesChange = (_, { menuType }: { menuType: MenuType }) => {
    setCurrentMenuType(menuType);
  };
  const onOpenChange = (open: boolean) => {
    if (!open) {
      form.resetFields();
      setCurrentMenuType(MenuType.Menu);
    }
  };

  return (
    <ModalForm
      name="input-icon-modal-menu"
      title="菜单配置"
      form={form}
      trigger={<Button type="primary">菜单配置</Button>}
      initialValues={{
        menuType: MenuType.Menu,
        sort: 0,
        parent: null,
        hidden: HiddenMenu.No,
        cache: CacheMenu.Yes
      }}
      onFinish={async (values) => {
        console.log(values);
      }}
      onValuesChange={onValuesChange}
      onOpenChange={onOpenChange}
      modalProps={{
        centered: false
      }}
    >
      <BizFormItemRadio
        name="menuType"
        label="菜单类型"
        options={menuTypeOptions}
        optionType="button"
        radioGroupProps={{ buttonStyle: 'solid' }}
        required
      />
      <BizFormItem name="parent" label="上级类目">
        <TreeSelect treeData={treeData} treeDefaultExpandAll placeholder="请选择" />
      </BizFormItem>
      <Row>
        <Col span={12}>
          <BizFormItemInput name="name" label={`${menuTypeName}名称`} required />
        </Col>
        <Col span={12}>
          <BizFormItemInput name="code" label={`${menuTypeName}编号`} required />
        </Col>
        <Col span={12}>
          <BizFormItemNumber name="sort" label="排序" precision={0} min={0} />
        </Col>
      </Row>
      {currentMenuType === MenuType.Menu && (
        <>
          <BizFormItem label="菜单图标" name="icon">
            <InputIcon iconData={InputIconsMap} />
          </BizFormItem>
          <Row>
            <Col span={12}>
              <BizFormItemRadio
                name="hidden"
                label="是否可见"
                options={hiddenMenuOptions}
                optionType="button"
                radioGroupProps={{ buttonStyle: 'solid' }}
                required
              />
            </Col>
            <Col span={12}>
              <BizFormItemRadio
                name="cache"
                label="是否缓存"
                options={cacheMenuOptions}
                optionType="button"
                radioGroupProps={{ buttonStyle: 'solid' }}
                required
              />
            </Col>
          </Row>
        </>
      )}
    </ModalForm>
  );
};

export default Demo;
