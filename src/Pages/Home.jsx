import React from 'react'
import Layout from './Layout';
import {Avatar, Button, Card, Comment, Icon, Input, Modal, Tooltip} from "antd";
import moment from "moment";

const { confirm } = Modal;

function showDeleteConfirm() {
    confirm({
        title: 'Tem certeza que deseja deletar esse tweet?',
        okText: 'Sim',
        okType: 'danger',
        cancelText: 'Não',
        onOk() {
            console.log('OK');
        },
        onCancel() {
            console.log('Cancel');
        },
    });
}

function showReportModal() {
    confirm({
        title: 'Diga-nos brevemente porque esse tweet deve ser reportado',
        content: <Input.TextArea/>,
        okText: 'Confirmar',
        okType: 'danger',
        cancelText: 'Cancelar',
        onOk() {
            console.log('OK');
        },
        onCancel() {
            console.log('Cancel');
        },
    });
}

class Home extends React.Component {
    deleteTweet = () => {
        showDeleteConfirm();
    };
    reportTweet = () => {
        showReportModal();
    };
    actions = [
        <span
            onClick={() => this.reportTweet()}
        >
        Reportar
    </span>,
        <span
            onClick={() => this.deleteTweet()}
        >
        Deletar
    </span>,
    ];
    render(){
        return(
            <Layout>
                <div
                    style={{display:'flex', marginTop:'70px'}}
                >
                    <div style={{width:'20%'}}/>
                        <div style={{flexGrow:1}}>
                            <Card
                                title="O que está sentindo?"
                                style={{margin:'0px auto', marginTop:'10px'}}
                            >
                                <Input.TextArea
                                    style={{height:'100px'}}
                                    placeholder="Digite aqui!!"
                                />
                                <div style={{textAlign:'end'}}>
                                    <Button type="primary" style={{marginTop:'2%'}}>
                                        Tweet
                                    </Button>
                                </div>
                            </Card>
                            <Card
                                style={{marginTop:'10px'}}
                            >
                                <Comment
                                    actions={this.actions}
                                    author="Han Solo"
                                    avatar={
                                        <Avatar
                                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                            alt="Han Solo"
                                        />
                                    }
                                    content={
                                        <p>
                                            We supply a series of design principles, practical patterns and high quality design
                                            resources (Sketch and Axure), to help people create their product prototypes beautifully
                                            and efficiently.
                                        </p>
                                    }
                                    datetime={
                                        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                            <span>{moment().fromNow()}</span>
                                        </Tooltip>
                                    }
                                />
                            </Card>
                            <Card
                                style={{marginTop:'10px'}}
                            >
                                <Comment
                                    actions={this.actions}
                                    author={<a>Han Solo</a>}
                                    avatar={
                                        <Avatar
                                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                            alt="Han Solo"
                                        />
                                    }
                                    content={
                                        <p>
                                            We supply a series of design principles, practical patterns and high quality design
                                            resources (Sketch and Axure), to help people create their product prototypes beautifully
                                            and efficiently.
                                        </p>
                                    }
                                    datetime={
                                        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                            <span>{moment().fromNow()}</span>
                                        </Tooltip>
                                    }
                                />
                            </Card>
                            <Card
                                style={{marginTop:'10px'}}
                            >
                                <Comment
                                    actions={this.actions}
                                    author={<a>Han Solo</a>}
                                    avatar={
                                        <Avatar
                                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                            alt="Han Solo"
                                        />
                                    }
                                    content={
                                        <p>
                                            We supply a series of design principles, practical patterns and high quality design
                                            resources (Sketch and Axure), to help people create their product prototypes beautifully
                                            and efficiently.
                                        </p>
                                    }
                                    datetime={
                                        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                            <span>{moment().fromNow()}</span>
                                        </Tooltip>
                                    }
                                />
                            </Card>
                        </div>
                    <div style={{width:'20%'}}/>
                </div>
            </Layout>
        )
    }
}

export default Home;