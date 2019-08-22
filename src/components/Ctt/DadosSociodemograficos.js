import React from 'react';
import PropTypes from 'prop-types';
import { withStyles} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import gray from '@material-ui/core/colors/grey';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import { unstable_Box as Box } from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';
import Axios from 'axios'
import Assignment from '@material-ui/icons/AssignmentInd';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },colorSwitchBase: {
    color: gray[700],
    '&$colorChecked': {
      color: blue[900],
      '& + $colorBar': {
        backgroundColor: blue[900],
      },
    },
  },
  fab: {
    width:100
  },
  colorBar: {
     borderRadius: 13,
    width: 42,
    height: 26,
    marginTop: -13,
    marginLeft: -21,
    border: 'solid 1px',
    borderColor: theme.palette.grey[400],
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  colorChecked: {},
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  textFieldFirst: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '45%',
  },
  textFieldFirstID: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '55%',
  },
  textFieldMax: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '65%',
  },
  textFieldAfterRadio: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '65%',
  },
  textField3em1Linha: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '30%',
  },
  textField3em1LinhaLeft: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '30%',
  },
  textFieldNaturalidade: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '25%',
  },
  textFieldNumero: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '15%',
  },
   root: {
    display: 'flex',
  },
  rootsave: {
    display: 'flex',
    marginTop: 10,
  },
  formControl: {
    margin: theme.spacing.unit * 1,
    marginTop: theme.spacing.unit * 2,
  },
  formControlDoubleRadio: {
    margin: theme.spacing.unit * 1,
    marginTop: theme.spacing.unit * 2,
  },
  group: {
    marginTop: theme.spacing.unit * 1,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  fontLabel:{
    fontWeight:'bold',
  },
  fontSwitch:{
    fontFamily:'Alegreya Sans',
    fontSize:30,
    color:'#797879'
  },
  fontInput:{
    fontWeight:'bold',
  }
});


class TextFields extends React.Component {
  state = {
    iddoaluno:0,
    raça:'',
    estadocivil:'',
    ocupação:'',
    quantosfilhos:'',
    religião:'',
    religiãooutras:'',
    moracomquem:'',
    moracomquemoutros:'',
    meiodetransporte:'',
    meiodetransporteprópio:'',
    redesocial:'',
    redesocialoutra:'',
    rendamensal:'',
    escolaridadedamãe:'',
    escolaridadedopai:'',
    meiovirtual:'',
    noçõesinformática:'',
    temfilhos: false,
  };


  handleChangeSwitch1 = name => event => {
    this.setState({ [name]: event.target.checked });
  };


  alunoTemFilhos = (classeroot, classtextfieldnumero) => {
    if(this.state.temfilhos){
    return (<div>
    <div className={classeroot}>
      <TextField
       id="quantosfilhos"
       label="Quantos?"
       className={classtextfieldnumero}
       value={this.state.quantosfilhos}
       onChange={this.handleChange('quantosfilhos')}
       margin="normal"
       variant='outlined'
     />
   </div>
   </div>)
    }else{
      return(
      <div className={classeroot}>
      </div>)
    }
  }
  alunoReligiãoOutras = (classeroot, classtextfieldnumero) => {
    if(this.state.religião === "outras"){
    return (<div>
    <div className={classeroot}>
      <TextField
       id="religiãooutras"
       label="Qual?"
       className={classtextfieldnumero}
       value={this.state.religiãooutras}
       onChange={this.handleChange('religiãooutras')}
       margin="normal"
       variant='outlined'
     />
   </div>
   </div>)
    }else{
      return(
      <div className={classeroot}>
      </div>)
    }
  }
  alunoMoraComQuemOutros = (classeroot, classtextfieldnumero) => {
    if(this.state.moracomquem === "outros"){
    return (<div>
    <div className={classeroot}>
      <TextField
       id="moracomquemoutros"
       label="Quem?"
       className={classtextfieldnumero}
       value={this.state.moracomquemoutros}
       onChange={this.handleChange('moracomquemoutros')}
       margin="normal"
       variant='outlined'
     />
   </div>
   </div>)
    }else{
      return(
      <div className={classeroot}>
      </div>)
    }
  }
  alunoMeioDeTransporte = (classeroot, classtextfieldnumero) => {
    if(this.state.meiodetransporte === "transporteprópio"){
    return (<div>
    <div className={classeroot}>
      <TextField
       id="meiodetransporteprópio"
       label="Qual?"
       className={classtextfieldnumero}
       value={this.state.meiodetransporteprópio}
       onChange={this.handleChange('meiodetransporteprópio')}
       margin="normal"
       variant='outlined'
     />
   </div>
   </div>)
    }else{
      return(
      <div className={classeroot}>
      </div>)
    }
  }
  alunoRedeSocial = (classeroot, classtextfieldnumero) => {
    if(this.state.redesocial === "outra"){
    return (<div>
    <div className={classeroot}>
      <TextField
       id="redesocialoutra"
       label="Qual?"
       className={classtextfieldnumero}
       value={this.state.redesocialoutra}
       onChange={this.handleChange('redesocialoutra')}
       margin="normal"
       variant='outlined'
     />
   </div>
   </div>)
    }else{
      return(
      <div className={classeroot}>
      </div>)
    }
  }
salvarDados = () => {
  if(this.state.iddoaluno === 0){
      alert('Adicione o ID do Aluno')
  }else{
    //AJUSTAR DATANASCIMENTO
      Axios.post(`http://projeto-extensao-backend.herokuapp.com/dados_sociodemograficos`, {
        iddoaluno : this.state.iddoaluno,
        raça : this.state.raça,
        estadocivil: this.state.estadocivil,
        ocupação: this.state.ocupação,
        quantosfilhos: this.state.quantosfilhos,
        religião: this.state.religião,
        religiãooutras: this.state.religiãooutras,
        moracomquem: this.state.moracomquem,
        moracomquemoutros: this.state.moracomquemoutros,
        meiodetransporte: this.state.meiodetransporte,
        meiodetransporteprópio: this.state.meiodetransporteprópio,
        redesocial: this.state.redesocial,
        redesocialoutra: this.state.redesocialoutra,
        rendamensal: this.state.rendamensal,
        escolaridadedamãe: this.state.escolaridadedamãe,
        escolaridadedopai: this.state.escolaridadedopai,
        meiovirtual: this.state.meiovirtual,
        noçõesinformática: this.state.noçõesinformática,
        temfilhos: this.state.temfilhos,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
  handleChangeRadio = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
  <Grid container  direction="row"
  justify="space-between"
  alignItems="baseline">
  <Grid>
  <Typography component="div">
        <Box fontWeight={800} textAlign='left' fontSize={32} fontFamily='Alegreya Sans' style={{color:'#4e5180'}} m={1}>
        {this.props.h1first}
      </Box>
    </Typography>
  </Grid>
  <Grid>
  <Assignment color = "primary" />
        <TextField
          id="standard-name"
          label="ID do Aluno"
          className={classes.textFieldFirstID}
          value={this.state.iddoaluno}
          onChange={this.handleChange('iddoaluno')}
          margin="normal"
          variant='outlined'
        />
  </Grid>
</Grid>
   
      <form className={classes.container} noValidate autoComplete="off" style={{display:'block'}}>
        <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Sexo</FormLabel>
          <RadioGroup
            aria-label="Sexo"
            name="Sexo"
            className={classes.group}
            value={this.state.sexo}
            onChange={this.handleChangeRadio('sexo')}
            row
          >
            <FormControlLabel value="feminino" control={<Radio/>} label="Feminino" />
            <FormControlLabel value="masculino" control={<Radio color="primary"/>} label="Masculino" />
            <FormControlLabel value="outro" control={<Radio color='primary'/>} label="Outro" />
          </RadioGroup>
        </FormControl>
        
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Cor/Raça/Etnia</FormLabel>
          <RadioGroup
            aria-label="Raça"
            name="Raça"
            className={classes.group}
            value={this.state.raça}
            onChange={this.handleChangeRadio('raça')}
            row
          >
            <FormControlLabel value="preta" control={<Radio color='primary'/>} label="Preta" />
            <FormControlLabel value="branca" control={<Radio color='primary'/>} label="Branca" />
            <FormControlLabel value="parda" control={<Radio color='primary'/>} label="Parda" />
            <FormControlLabel value="indigena" control={<Radio color='primary'/>} label="Indígena" />
          </RadioGroup>
        </FormControl>
        
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Estado Civil</FormLabel>
          <RadioGroup
            aria-label="estadocivil"
            name="estadocivil"
            className={classes.group}
            value={this.state.estadocivil}
            onChange={this.handleChangeRadio('estadocivil')}
            row
          >
            <FormControlLabel value="solteiro" control={<Radio color='primary'/>} label="Solteiro" />
            <FormControlLabel value="namorando" control={<Radio color='primary'/>} label="Namorando" />
            <FormControlLabel value="casado" control={<Radio color='primary'/>} label="Casado" />
            <FormControlLabel value="uniãoestável" control={<Radio color='primary'/>} label="União Estável" />
            <FormControlLabel value="divorciado" control={<Radio color='primary'/>} label="Divorciado" />
            <FormControlLabel value="nãoinforma" control={<Radio color='primary'/>} label="Não informa" />
          </RadioGroup>
        </FormControl>
        
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Tem Filhos?</FormLabel>
          <RadioGroup
            aria-label="temfilhos"
            name="temfilhos"
            className={classes.group}
            value={this.state.temfilhos}
            onChange={this.handleChangeRadio('temfilhos')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Sim" />
          </RadioGroup>
          {this.alunoTemFilhos()}

        </FormControl>
        
      </div>


      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Ocupação</FormLabel>
          <RadioGroup
            aria-label="ocupação"
            name="ocupação"
            className={classes.group}
            value={this.state.ocupação}
            onChange={this.handleChangeRadio('ocupação')}
            row
          >
            <FormControlLabel value="apenasestuda" control={<Radio color='primary'/>} label="Apenas Estuda" />
            <FormControlLabel value="funcionáriopúblico" control={<Radio color='primary'/>} label="Funcionário Público" />
            <FormControlLabel value="trabalhanosetorprivado" control={<Radio color='primary'/>} label="Trabalha no setor Privado" />
            <FormControlLabel value="desempregado" control={<Radio color='primary'/>} label="Desempregado" />
            <FormControlLabel value="autônomo" control={<Radio color='primary'/>} label="Autônomo" />
            <FormControlLabel value="nãoinforma" control={<Radio color='primary'/>} label="Não informa" />
          </RadioGroup>
        </FormControl>
        
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Religião</FormLabel>
          <RadioGroup
            aria-label="religião"
            name="religião"
            className={classes.group}
            value={this.state.religião}
            onChange={this.handleChangeRadio('religião')}
            row
          >
            <FormControlLabel value="católico" control={<Radio color='primary'/>} label="Católico" />
            <FormControlLabel value="evangélico" control={<Radio color='primary'/>} label="Evangélico" />
            <FormControlLabel value="pentecostal" control={<Radio color='primary'/>} label="Pentecostal" />
            <FormControlLabel value="espírita" control={<Radio color='primary'/>} label="Espírita" />
            <FormControlLabel value="afrobrasileiro" control={<Radio color='primary'/>} label="Afro-brasileiro" />
            <FormControlLabel value="nenhumareligião" control={<Radio color='primary'/>} label="Nenhuma religião" />
            <FormControlLabel value="outras" control={<Radio color='primary'/>} label="Outras" />
          </RadioGroup>
          {this.alunoReligiãoOutras()}

        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Renda Mensal</FormLabel>
          <RadioGroup
            aria-label="rendamensal"
            name="rendamensal"
            className={classes.group}
            value={this.state.rendamensal}
            onChange={this.handleChangeRadio('rendamensal')}
            row
          >
            <FormControlLabel value="semrenda" control={<Radio color='primary'/>} label="Sem Renda" />
            <FormControlLabel value="até1sm" control={<Radio color='primary'/>} label="Até 1 SM" />
            <FormControlLabel value="entre1a2sm" control={<Radio color='primary'/>} label="Entre 1 a 2 SM" />
            <FormControlLabel value="entre3a4sm" control={<Radio color='primary'/>} label="Entre 3 a 4 SM" />
            <FormControlLabel value="5oumaide5sm" control={<Radio color='primary'/>} label="5 ou mais de 5 SM" />
            <FormControlLabel value="nãorespondeu" control={<Radio color='primary'/>} label="Não Respondeu" />
            <FormControlLabel value="bolsa" control={<Radio color='primary'/>} label="Bolsa" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Escolaridade da Mãe</FormLabel>
          <RadioGroup
            aria-label="escolaridadedamãe"
            name="escolaridadedamãe"
            className={classes.group}
            value={this.state.escolaridadedamãe}
            onChange={this.handleChangeRadio('escolaridadedamãe')}
            row
          >
            <FormControlLabel value="nãoestudou" control={<Radio color='primary'/>} label="Não estudou" />
            <FormControlLabel value="analfabetofuncional" control={<Radio color='primary'/>} label="Analfabeto funcional" />
            <FormControlLabel value="ensinofundamentalincompleto" control={<Radio color='primary'/>} label="Ensino fundamental incompleto" />
            <FormControlLabel value="ensinofundamentalcompleto" control={<Radio color='primary'/>} label="Ensino fundamental completo" />
            <FormControlLabel value="ensinomédioincompleto" control={<Radio color='primary'/>} label="Ensino médio incompleto" />
            <FormControlLabel value="ensinomédiocompleto" control={<Radio color='primary'/>} label="Ensino médio completo" />
            <FormControlLabel value="ensinosuperiorincompleto" control={<Radio color='primary'/>} label="Ensino superior incompleto" />
            <FormControlLabel value="ensinosuperiorcompleto" control={<Radio color='primary'/>} label="Ensino superior completo" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Escolaridade do Pai</FormLabel>
          <RadioGroup
            aria-label="escolaridadedopai"
            name="escolaridadedopai"
            className={classes.group}
            value={this.state.escolaridadedopai}
            onChange={this.handleChangeRadio('escolaridadedopai')}
            row
          >
            <FormControlLabel value="nãoestudou" control={<Radio color='primary'/>} label="Não estudou" />
            <FormControlLabel value="analfabetofuncional" control={<Radio color='primary'/>} label="Analfabeto funcional" />
            <FormControlLabel value="ensinofundamentalincompleto" control={<Radio color='primary'/>} label="Ensino fundamental incompleto" />
            <FormControlLabel value="ensinofundamentalcompleto" control={<Radio color='primary'/>} label="Ensino fundamental completo" />
            <FormControlLabel value="ensinomédioincompleto" control={<Radio color='primary'/>} label="Ensino médio incompleto" />
            <FormControlLabel value="ensinomédiocompleto" control={<Radio color='primary'/>} label="Ensino médio completo" />
            <FormControlLabel value="ensinosuperiorincompleto" control={<Radio color='primary'/>} label="Ensino superior incompleto" />
            <FormControlLabel value="ensinosuperiorcompleto" control={<Radio color='primary'/>} label="Ensino superior completo" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Mora com Quem?</FormLabel>
          <RadioGroup
            aria-label="moracomquem"
            name="moracomquem"
            className={classes.group}
            value={this.state.moracomquem}
            onChange={this.handleChangeRadio('moracomquem')}
            row
          >
            <FormControlLabel value="pais" control={<Radio color='primary'/>} label="Pais" />
            <FormControlLabel value="somentecomamãe" control={<Radio color='primary'/>} label="Somente, com a mãe " />
            <FormControlLabel value="somentecomopai" control={<Radio color='primary'/>} label="Somente, com o pai" />
            <FormControlLabel value="comavós" control={<Radio color='primary'/>} label="Com avós" />
            <FormControlLabel value="comamigos/colegas" control={<Radio color='primary'/>} label="Com amigos/colegas" />
            <FormControlLabel value="colégio" control={<Radio color='primary'/>} label="Colégio" />
            <FormControlLabel value="outros" control={<Radio color='primary'/>} label="Outros" />
          </RadioGroup>
          {this.alunoMoraComQuemOutros()}

        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Qual o principal meio de transporte que você utiliza para chegar ao CTT?</FormLabel>
          <RadioGroup
            aria-label="meiodetransporte"
            name="meiodetransporte"
            className={classes.group}
            value={this.state.meiodetransporte}
            onChange={this.handleChangeRadio('meiodetransporte')}
            row
          >
            <FormControlLabel value="apé" control={<Radio color='primary'/>} label="A pé" />
            <FormControlLabel value="carona,bicicleta" control={<Radio color='primary'/>} label="Carona, bicicleta" />
            <FormControlLabel value="transportecoletivo" control={<Radio color='primary'/>} label="Transporte coletivo" />
            <FormControlLabel value="transporteescolar" control={<Radio color='primary'/>} label="Transporte escolar" />
            <FormControlLabel value="transporteprópio" control={<Radio color='primary'/>} label="Transporte próprio" />
          </RadioGroup>
          {this.alunoMeioDeTransporte()}

        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Possui Smartphone ou Computador ?</FormLabel>
          <RadioGroup
            aria-label="meiovirtual"
            name="meiovirtual"
            className={classes.group}
            value={this.state.meiovirtual}
            onChange={this.handleChangeRadio('meiovirtual')}
            row
          >
            <FormControlLabel value="sim,smartphone" control={<Radio color='primary'/>} label="Sim, smartphone" />
            <FormControlLabel value="sim,computador" control={<Radio color='primary'/>} label="Sim, computador" />
            <FormControlLabel value="sim,osdois" control={<Radio color='primary'/>} label="Sim, os dois" />
            <FormControlLabel value="nãopossuo" control={<Radio color='primary'/>} label="Não possuo" />
          </RadioGroup>

        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Noções Básicas de Informática ?</FormLabel>
          <RadioGroup
            aria-label="noçõesinformática"
            name="noçõesinformática"
            className={classes.group}
            value={this.state.noçõesinformática}
            onChange={this.handleChangeRadio('noçõesinformática')}
            row
          >
            <FormControlLabel value="não" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="sim" control={<Radio color='primary'/>} label="Sim" />
          </RadioGroup>

        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Qual rede Social Mais Usa ?</FormLabel>
          <RadioGroup
            aria-label="redesocial"
            name="redesocial"
            className={classes.group}
            value={this.state.redesocial}
            onChange={this.handleChangeRadio('redesocial')}
            row
          >
            <FormControlLabel value="whatsapp" control={<Radio color='primary'/>} label="Whatsapp" />
            <FormControlLabel value="instagram" control={<Radio color='primary'/>} label="Instagram" />
            <FormControlLabel value="facebook" control={<Radio color='primary'/>} label="Facebook" />
            <FormControlLabel value="twitter" control={<Radio color='primary'/>} label="Twitter" />
            <FormControlLabel value="nenhuma" control={<Radio color='primary'/>} label="Nenhuma" />
            <FormControlLabel value="outra" control={<Radio color='primary'/>} label="Outra" />
          </RadioGroup>
          {this.alunoRedeSocial()}
        </FormControl>
      </div>
      </form>
      <div>
      <Grid container  direction="row"
  justify="space-between"
  alignItems="baseline">
  <Grid>
  </Grid>
  <Grid>
<Fab variant="extended" color ="primary" aria-label="Delete" className={classes.fab}
onClick={this.salvarDados}>
  <NavigationIcon className={classes.extendedIcon} />
</Fab>
  </Grid>
</Grid>
</div>
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);