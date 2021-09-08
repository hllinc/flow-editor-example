import React from 'react';
import './App.css';
import FlowEditor from '@hongliang-org/flow-editor';

const flowMockData = {
    height: 800,
    mode: 'edit',
    users: [],
    groups: [],
    selectedModel: {},
    processModel: {
        id: '',
        name: '',
        clazz: 'process',
        dataObjs: [],
        signalDefs: [],
        messageDefs: []
    },
    data: {
        nodes: [
            // { id: 'startNode1', label: '开始', clazz: 'start' },
            // { id: 'taskNode1', label: '流程1', clazz: 'userTask' },
            // { id: 'taskNode2', label: '流程2', clazz: 'scriptTask' },
            // { id: 'taskNode21', label: '流程21', clazz: 'scriptTask' },
            // { id: 'taskNode3', label: '流程3', clazz: 'receiveTask' },
            // // { id: 'taskNode4', label: '流程4', clazz: 'customDomNode' },
            // {
            //     id: 'taskNode4',
            //     label: '123456789009中华人民共和国86543212345678987345678',
            //     description: '123456789009中华人民共和国86543212345678987345678',
            //     clazz: 'myNode',
            //     value: 999.99,
            //     time: '2021-01-06 15:53:21'
            // },
            // {
            //     id: 'taskNode5',
            //     label: '旧版策略器节点',
            //     clazz: 'strategyNode',
            //     userConfig: '中12，34，。balkdjj , kdlld中华人民，共和国中华人民共和国中华人民共和国',
            //     delaySendConfig: '中华人民共和国中华人民共和国中华人民共和国中华人民共和国',
            //     pushConfig: '中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国'
            // },
            // { id: 'endNode', label: '结束', clazz: 'end' }
        ],
        edges: [
            // { source: 'startNode1', target: 'taskNode1', clazz: 'flow' },
            // { source: 'taskNode1', target: 'taskNode2', clazz: 'flow' },
            // { source: 'taskNode1', target: 'taskNode21', clazz: 'flow' },
            // { source: 'taskNode21', target: 'taskNode3', clazz: 'flow' },
            // { source: 'taskNode2', target: 'taskNode3', clazz: 'flow' },
            // { source: 'taskNode3', target: 'endNode', clazz: 'flow' },
            // { source: 'taskNode2', target: 'taskNode4', clazz: 'flow' },
        ]
    }
};

function App() {
  return (
    <div className="App">
        <FlowEditor data={flowMockData}/>
    </div>
  );
}

export default App;
