import React, { Component } from 'react';

import Bouton from './Bouton';
import LCD from './LCD';

class Calculatrice extends Component {
  state = {
    entree: '',
    sortie: '0',
  };
  operandes = [];

  chiffre(chiffre) {
    this.setState({
      entree: this.state.entree + chiffre,
    });
  }

  addition() {
    const { entree } = this.state;
    this.operandes.push(parseInt(entree));
    this.setState({
      entree: '',
    });
  }

  egal() {
    const { entree } = this.state;
    this.operandes.push(parseInt(entree));
    let sortie = 0;
    for (
      let i = 0;
      i < this.operandes.length;
      i++
    ) {
      sortie += this.operandes[i];
    }
    this.setState({
      sortie: sortie,
    });
  }

  render() {
    const { entree, sortie } = this.state;
    return (
      <div style={{ width: 400, margin: 'auto' }}>
        <LCD entree={entree} sortie={sortie} />
        <div>
          <Bouton
            couleur="lightgray"
            taille={50}
            label={0}
            onPress={() => this.chiffre(0)}
          />
        </div>
        <div>
          <Bouton
            couleur="lightgray"
            taille={50}
            label={1}
            onPress={() => this.chiffre(1)}
          />
          <Bouton
            couleur="lightgray"
            taille={50}
            label={2}
            onPress={() => this.chiffre(2)}
          />
          <Bouton
            couleur="lightgray"
            taille={50}
            label={3}
            onPress={() => this.chiffre(3)}
          />
        </div>
        <div>
          <Bouton
            couleur="lightgray"
            taille={50}
            label={4}
            onPress={() => this.chiffre(4)}
          />
          <Bouton
            couleur="lightgray"
            taille={50}
            label={5}
            onPress={() => this.chiffre(5)}
          />
          <Bouton
            couleur="lightgray"
            taille={50}
            label={6}
            onPress={() => this.chiffre(6)}
          />
        </div>
        <div>
          <Bouton
            couleur="lightgray"
            taille={50}
            label={7}
            onPress={() => this.chiffre(7)}
          />
          <Bouton
            couleur="lightgray"
            taille={50}
            label={8}
            onPress={() => this.chiffre(8)}
          />
          <Bouton
            couleur="lightgray"
            taille={50}
            label={9}
            onPress={() => this.chiffre(9)}
          />
        </div>
        <div>
          <Bouton
            couleur="lightgray"
            taille={75}
            label="+"
            onPress={() => this.addition()}
          />
          <Bouton
            couleur="lightgray"
            taille={75}
            label="="
            onPress={() => this.egal()}
          />
        </div>
      </div>
    );
  }
}

export default Calculatrice;
