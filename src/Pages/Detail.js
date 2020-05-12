import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {ButtonBackToHome} from '../Components/ButtonBackToHome'



const API_KEY ='a4f76503'

export class Detail extends Component{
    static propTypes={
        match: PropTypes.shape({
            params:PropTypes.object,
            isExact:PropTypes.bool,
            path:PropTypes.string,
            url:PropTypes.string,
        })
    }

    state={movie:{}}


    _fetchMovie({id}){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
       .then(res=>res.json())
       .then(movie=>{
           console.log({movie})
           this.setState({movie})
       })
    }

    componentDidMount(){
        console.log(this.props)
        const {id} = this.props.match.params
        this._fetchMovie({id})
    }
 


    render(){
        const {Title,Poster,Actors,Metascore,Plot,Awards}=
        this.state.movie
        return(
            <div>
                <ButtonBackToHome />
                <h1 className='title'>{Title}</h1>
                <img src={Poster} alt="" />
                <h3 className='subtitle'>{Actors}</h3> 
                <h3 className='subtitle'>{Awards}</h3>
                <span className='subtitle'>{Metascore}</span>
                <p className='subtitle'>{Plot}</p>
            </div>
        )
    }
}