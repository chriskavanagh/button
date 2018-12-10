import React, {Component} from 'react';
import styled from 'styled-components';
import api from './api/api';


export default class Home extends Component {
    state = {
        posts: []
    }

    componentDidMount(){
        api.fetchData()
            .then(posts => {
                console.log(posts)
                this.setState({
                    posts: posts.slice(0,10)
                })
            })
        }

    render() {
        const { posts } = this.state;           

        return (
            <div className="container">
                <CDIV>
                    <h1>Posts</h1>
                </CDIV>

                {
                  !posts.length && <h2>No Posts</h2>
                }

                {
                  posts.length && 
                  posts.map(post => 
                    <MainDiv key={ post.id }>
                        <TitleDiv>{ post.title }</TitleDiv>
                        <BodyDiv>{ post.body }</BodyDiv>
                    </MainDiv>)                  
                }                                    
            </div>
        )
    }    
} // ./Class Home

const MainDiv = styled.div`
    margin: 40px auto;
    background: #DCDCDC;
    border: 6px solid #a47c48;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    color: #333300;
    width: 60%;
`

const TitleDiv = styled.div`
    font-size: 35px;
    text-transform: capitalize;
    padding-bottom: 15px;
    font-weight: bold;
    text-decoration: underline;
`;

const BodyDiv = styled.div`
    font-size: 22px;
`;

const CDIV = styled.div `
    display: flex;
    justify-content: center;
    font-size: 1.9rem;
`;