import React from 'react';
import Header from './Header'
import Input from './Input'
import ItemList from './ItemList'
import db from '../database/firestore'
import './App.sass';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      notes: []
    }
  }

  componentDidMount = () => {
    db.collection('notes').get()
      .then(snapshot => { 
          let notes = []
          snapshot.forEach(doc => {
            notes.push({
                    title: doc.data().title,
                    description: doc.data().description,
                    id: doc.id
                  })
          })
          this.setState({notes})
      })
      .catch(e => console.log('Error', e))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const title = e.target.elements.title.value
    const description = e.target.elements.description.value
    db.collection('notes').add({
      title, description
    }).then(ref => {
      this.setState({
        notes: [...this.state.notes, {title, description, id: ref.id}]
      })
    })

    e.target.elements.title.value = ''
    e.target.elements.description.value = ''
  }

  handleDelete = (id) => {
    db.collection('notes').doc(id).delete()
    const notes = this.state.notes.filter(note => note.id !== id)
    this.setState({notes})
  }

  render() {
    return (


      <section className='section' >
        <div className='container'>
          <div className='columns is-centered'>
            <div className='column is-half'>
            <Header />
              <Input handleSubmit={this.handleSubmit}/>
              <ItemList notes={this.state.notes} handleDelete={this.handleDelete}/> 
            </div>
          </div>
        </div>
      </section>

    );
  }
}

export default App;