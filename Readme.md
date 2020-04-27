#### exForm

- exForm Attributes

|     名称      |                                 说明                                 |  类型   |     可选值     | 默认值  |
| :-----------: | :------------------------------------------------------------------: | :-----: | :------------: | :-----: |
|     model     |                             表单数据对象                             | object  |       —        |    —    |
|     rules     |                             表单验证规则                             | object  |       —        |    —    |
|     size      |                用于控制该表单内组件的尺寸(优先级最大)                | string  |  big/default   | default |
|   disabled    |                     是否禁用该表单内的所有组件。                     | boolean |       —        |  false  |
| labelPosition | 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 labelWidth | object  | left/top/right |    —    |
|  labelWidth   |                           表单域标签的宽度                           | string  |       —        |   280   |

#### exFormItem

- exFormItem Attributes

|     名称      |                                     说明                                     |  类型  |             可选值              | 默认值  |
| :-----------: | :--------------------------------------------------------------------------: | :----: | :-----------------------------: | :-----: |
|     prop      | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | string | 传入 Form 组件的 model 中的字段 |    —    |
|     rules     |                                 表单验证规则                                 | object |                —                |    —    |
|     size      |                    用于控制该表单内组件的尺寸(优先级最大)                    | string |           big/default           | default |
| labelPosition |     表单域标签的位置，如果值为 left 或者 right 时，则需要设置 labelWidth     | object |         left/top/right          |    —    |
|  labelWidth   |                               表单域标签的宽度                               | string |                —                |    —    |

#### exInput

- Input Attributes

|    名称     |                  说明                  |      类型       |                  可选值                  | 默认值  |
| :---------: | :------------------------------------: | :-------------: | :--------------------------------------: | :-----: |
|    type     |                  类型                  |     string      | 除去 textarea 其他 原生 input 的 type 值 |  text   |
|   v-model   |                 绑定值                 | string / number |                    —                     |    —    |
|    size     | 用于控制该表单内组件的尺寸(优先级最大) |     string      |               big/default                | default |
|    name     |                原生属性                |     string      |                    —                     |    —    |
| placeholder |                提示文字                |     string      |                    —                     |    —    |
|  disabled   |                  禁用                  |     boolean     |                    —                     |  false  |

- Input Events

| 事件名称 |                  说明                  |    回调参数    |
| :------: | :------------------------------------: | :------------: |
|   blur   |        在 Input 失去焦点时触发         | (event: Event) |
|  focus   |        在 Input 获得焦点时触发         | (event: Event) |
|  change  | 仅在输入框失去焦点或用户按下回车时触发 | (value: string | number) |
|  input   |         在 Input 值改变时触发          | (value: string | number) |
