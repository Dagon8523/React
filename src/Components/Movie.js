import React,{Component} from 'react'
import  PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export class Movie extends Component{
    static propTypes = {
        Title:PropTypes.string,
        Year:PropTypes.string,
        Poster:PropTypes.string,
        id:PropTypes.string
    }

    render(){
        const {id,Title,Year,Poster}=this.props
        return(
            <Link to={`/detail/${id}`} className="card">
               <div className="card-image">
                 <figure className="image">
                  <img
                  alt={Title} 
                  src={Poster} 
                  />
                 </figure>
               </div>
              <div className="card-content">
              <div className="media">
                 <div className="media-content">
                     <p className="title is-4">{Title}</p>
                     <p className="subtitle is-6">{Year}</p>
                 </div>
               </div>
         </div>
    </Link>
        )
    }
}



