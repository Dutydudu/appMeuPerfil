import React, { Component } from 'react';
import { View, Text, Image, Center} from 'react-native';


export default function App(){
  
    let name = 'Luis Eduardo Duarte';
    let age = 24
    let faculdade = 'FATEC-RL'
    let curso = 'Sistemas para Internet'
    let img = 'https://avatars.githubusercontent.com/u/79476368?v=4';

  return(

      <View style={{backgroundColor: 'black', flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
        <View style={{backgroundColor:'#3a89c9',height: 50, textAlign: 'center', justifyContent: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Meu perfil</Text>
        </View>

        <Image
          source={{ uri: img }}
          style={{ width: 250, height: 250, margin: 30, display: 'flex', justifyContent: 'center', alignItens: 'center', borderRadius: 5 }}
        />

      <View style={{
        backgroundColor: '#3a89c9',
        width: 300,
        height: 410, 
        margin: 12,  
        alignSelf: 'center',
        textAlign: 'center',
        borderRadius: 12
        }}>

        <View>
          <Text style={{ fontSize: 22, marginTop: 20, padding: 5
           }}>Dados pessoais</Text>

          <Text style={{ fontSize: 16, marginTop: 20, padding: 5 
           }}>{name}</Text>

          <Text style={{ fontSize: 16, padding: 5
           }}>Idade: {age} Anos</Text>

          <Text style={{fontSize: 16, fontWeight:'bold'}}>Formação: </Text>

           <Text style={{ margin: 5, fontSize: 16, padding: 5
           }}>{curso} na {faculdade}</Text>

           <Text style={{fontSize: 16, fontWeight:'bold'}}>Profissão: </Text>
           <Text style={{ fontSize: 16, padding: 5
           }}>Estagiário em Processamento de Dados no Grupo Verreschi.</Text>

           <Text style={{fontSize: 16, fontWeight: 'bold'}}>Projetos</Text>
           <Text Text style={{ fontSize: 16, padding: 5}} >Gerenciador de estoque para lojas de calçados.</Text>
           <Text Text style={{ fontSize: 16, padding: 5}} >GitHub - https://github.com/Dutydudu</Text>
        </View>
      </View>

      </View>
    )
}
