import React, { Component } from 'react';
import s from "./SearchMovies.module.css";

class SearchMovies extends Component{
    state = {
        query: '',
    };

    handleChange = e => {
        this.setState({query:e.currentTarget.value 
        })
    }

     handleSubmit = e => {
         e.preventDefault();

         this.props.onSubmit(this.state.query)
         this.setState({query:''})
    }

    render() {
        const { query } = this.state;
        return (
            <>
                <form className={s.SearchForm} onSubmit={this.handleSubmit}>
                    <input
                    className={s.SearchFormInput}
                    value={query}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    onChange={this.handleChange}
                    />
                     <button type="submit" className={s.SearchFormButton}>
                        <span className={s.SearchFormButtonLabel}>Search</span>
                    </button>
                </form>
            </>
            
        )
    }
}

export default SearchMovies