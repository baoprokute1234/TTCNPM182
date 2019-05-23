import React, { Component } from 'react';
import "./Detail.css";
import ComicDetail from './ComicDetail';
class Detail extends Component {
    render() {
        var kind = this.props.comic.kind;
        var str_kind = "";
        for(var x in kind){
            str_kind += kind[x] + ", "
        }
        var str_kind1 = str_kind.substring(0,str_kind.length-2);
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th className="text1">{this.props.comic.comicName}</th>
                        </tr>   
                    </thead>
                    <tbody>
                        <tr className="row">
                            <td className="col m4"><img id="comicPic" src={this.props.comic.avatar} alt="comicPic" /></td>
                            <td className="col m8">
                                <table className="striped">
                                <tr><ComicDetail idComic={this.props.comic._id} 
                                             author={this.props.comic.author} artist={this.props.comic.artist} 
                                             genre={str_kind1}
                                             publisher={this.props.comic.company}
                                             status="Chưa rõ"/>
                                </tr>
                                <tr>
                                    <a className="btn btn-large grey darken-3 white-text waves-effect waves-light">Thêm vào yêu thích</a>
                                </tr>
                                </table>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
                
            </div>
            
        );
    }
}

export default Detail;
