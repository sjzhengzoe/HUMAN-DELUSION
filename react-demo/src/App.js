import './index.css';
import { useState } from 'react';

import { Tree } from 'antd';

export default function App() {
  // 当前点击的节点
  const [nowNode, setNowNode] = useState({});
  // 树 的数据
  const [treeData, setTreeData] = useState([
    {
      title: 'parent 1',
      key: '0',
      parentKey: null,
      children: [
        {
          title: 'parent 1-0',
          key: '1',
          parentKey: '0',
          children: [
            {
              title: 'leaf',
              parentKey: '1',
              key: '1.1',
              children: [
                {
                  title: 'leaf',
                  key: '1.1.1',
                  parentKey: '1.1',
                },
                {
                  title: 'leaf',
                  parentKey: '1.1',
                  key: '1.1.2',
                },
                {
                  title: 'leaf',
                  parentKey: '1.1',
                  key: '1.1.3',
                },
              ],
            },
            {
              title: 'leaf',
              parentKey: '1',
              key: '1.2',
            },
            {
              title: 'leaf',
              parentKey: '1',
              key: '1.3',
            },
          ],
        },
        {
          title: 'parent 1-1',
          key: '2',
          parentKey: '0',
          children: [
            {
              title: 'leaf',
              parentKey: '2',
              key: '2.1',
            },
          ],
        },
        {
          title: 'parent 1-2',
          key: '3',
          parentKey: '0',
          children: [
            {
              title: 'leaf',
              parentKey: '3',
              key: '3.1',
            },
            {
              title: 'leaf',
              parentKey: '3',
              key: '3.2',
            },
          ],
        },
      ],
    },
  ]);
  // 是否处于编辑状态
  const [isEdit, setEdit] = useState(false);

  // 一维数组转多维
  function oneToMore(data) {
    // 查找key为tempkey的子节点
    function recursionFun(tempkey) {
      let tree = [];
      data.forEach((item) => {
        if (item && tempkey === item.parentKey) {
          tree.push({
            ...item,
            children: recursionFun(item.key),
          });
        }
      });
      return tree;
    }
    // 寻找key为null的子节点  即根节点的上一层节点的子节点
    return recursionFun(null);
  }

  // 多维数组转一维
  function moreToOne(data) {
    const arr = [];
    // 递归遍历children存入arr数组
    function mapChildren(children) {
      children.map((item) => {
        const { title, key, parentKey } = item;
        arr.push({ title, key, parentKey });
        item.children && mapChildren(item.children);
        return null;
      });
    }
    mapChildren(data);
    return arr;
  }

  // 渲染节点
  function titleRender(data) {
    const { title, key } = data;
    let treeDataNow = [...treeData];

    // 编辑状态下 blur
    function onBlur(e) {
      const title = e.target.value;
      let oneData = moreToOne(treeDataNow);
      oneData = oneData.map((item) => {
        // 找到要编辑的那个节点并修改title
        if (item.key === nowNode.key) {
          if (title) return { ...item, title };
          if (item.title) return item;
          return undefined;
        } else {
          return item;
        }
      });
      const moreData = oneToMore(oneData);
      setTreeData(moreData);
      setEdit(false);
    }
    //  编辑操作
    function edit() {
      setEdit(true);
    }
    // 删除操作
    function del() {
      let oneData = moreToOne(treeDataNow);
      // 找到要删除的那个节点并删除
      let hasChildren = oneData.filter((item) => item.parentKey === nowNode.key);
      if (hasChildren.length > 0) {
        alert('不允许删除');
        return;
      }
      oneData = oneData.filter((item) => item.key !== nowNode.key);
      const moreData = oneToMore(oneData);
      setTreeData(moreData);
    }
    // 添加操作
    function add() {
      let oneData = moreToOne(treeDataNow);
      // 添加一个节点
      const newNode = {
        title: '',
        key: new Date().getTime(),
        parentKey: nowNode.key,
        pos: nowNode.pos + '-0',
      };
      setNowNode(newNode);
      oneData.push(newNode);
      setEdit(true);
      const moreData = oneToMore(oneData);
      setTreeData(moreData);
    }

    return (
      <>
        {isEdit && nowNode.key === key ? (
          <input autoFocus onBlur={onBlur} defaultValue={title} />
        ) : (
          <span>{title}</span>
        )}
        {nowNode.key === key && (
          <span>
            <span onClick={edit}>编辑</span>
            <span onClick={del}>删除</span>
            {nowNode.pos.split('-').length <= 4 && <span onClick={add}>增加</span>}
          </span>
        )}
      </>
    );
  }
  // 选中的时候保存当前的节点数据
  function onSelect(selectedKeys, { selected, selectedNodes, node, event }) {
    selected && setNowNode(node);
  }

  return (
    <div className="App">
      <Tree
        defaultExpandAll={true}
        showLine
        onSelect={onSelect}
        defaultExpandedKeys={['0-0-0']}
        treeData={treeData}
        titleRender={titleRender}
      />
    </div>
  );
}
