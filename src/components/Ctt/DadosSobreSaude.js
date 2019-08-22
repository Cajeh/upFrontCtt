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
import Assignment from '@material-ui/icons/AssignmentInd';
import Axios from 'axios'

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
  fab: {
    width:100
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
  textAltered:{
    marginRight: theme.spacing.unit,
    width: '100%',
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
  fontInput:{
    fontWeight:'bold',
  }
});


class TextFields extends React.Component {
  state = {
    temoutevedesmaios:'',
    temouteveconvulsão:'',
    medicaçãousocontínuo:'',
    medicaçãousocontínuosim:'',
    acompanhandopormédico:'',
    temdiabetes:'',
    temhipertensão:'',
    apresentaproblemasrespiratórios:'',
    apresentaproblemasnocoração:'',
    apresentaproblemasnocoraçãosim:'',
    submeteucirurgia:'',
    submeteucirurgiasim:'',
    estagestante:'',
    estagestantesim:'',
    faztratamentoespecializado:'',
    faztratamentoespecializadosim:'',
    necessidadeespecial:'',
    utilizaçãoserviçodesaúde:'',
    iddoaluno:'',
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
  ajusteSimNaoTemFilhos = () => {
    if(this.state.temfilhos){
    return (<div>
   <Typography component="div">
      <Box fontWeight={400} textAlign='left' fontSize={30} fontFamily='Alegreya Sans' style={{color:'green'}} m={1}>
        Sim
      </Box>
    </Typography>
   </div>)
    }else{
      return(
      <div>
      <Typography component="div">
      <Box fontWeight={400} textAlign='left' fontSize={30} fontFamily='Alegreya Sans' style={{color:'green'}} m={1}>
        Não
      </Box>
    </Typography>
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
  alunoMedicaçãoUsoContínuo = (classeroot, classtextfieldnumero) => {
    if(this.state.medicaçãousocontínuo === "sim"){
    return (<div>
    <div className={classeroot}>
      <TextField
       id="medicaçãousocontínuosim"
       label="Qual?"
       className={classtextfieldnumero}
       value={this.state.medicaçãousocontínuosim}
       onChange={this.handleChange('medicaçãousocontínuosim')}
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
  alunoProblemaCoração = (classeroot, classtextfieldnumero) => {
    if(this.state.apresentaproblemasnocoração === "sim"){
    return (<div>
    <div className={classeroot}>
      <TextField
       id="apresentaproblemasnocoraçãosim"
       label="Qual?"
       className={classtextfieldnumero}
       value={this.state.apresentaproblemasnocoraçãosim}
       onChange={this.handleChange('apresentaproblemasnocoraçãosim')}
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
  alunoEstaGestante = (classeroot, classtextfieldnumero) => {
    if(this.state.estagestante === "sim"){
    return (<div>
    <div className={classeroot}>
      <TextField
       id="estagestantesim"
       label="Quantas Semanas?"
       className={classtextfieldnumero}
       value={this.state.estagestantesim}
       onChange={this.handleChange('estagestantesim')}
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
  alunoFazTratamentoEspecializado = (classeroot, classtextfieldnumero) => {
    if(this.state.faztratamentoespecializado === "outro"){
    return (<div>
    <div className={classeroot}>
      <TextField
       id="faztratamentoespecializadosim"
       label="Qual?"
       className={classtextfieldnumero}
       value={this.state.faztratamentoespecializadosim}
       onChange={this.handleChange('faztratamentoespecializadosim')}
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
  alunoEstaGestante = (classeroot, classtextfieldnumero) => {
    if(this.state.estagestante === "sim"){
    return (<div>
    <div className={classeroot}>
      <TextField
       id="estagestantesim"
       label="Quantas Semanas?"
       className={classtextfieldnumero}
       value={this.state.estagestantesim}
       onChange={this.handleChange('estagestantesim')}
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
    if(this.state.moracomquem === "sim"){
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
  alunoSubmeteuCirurgia = (classeroot, textaltered) => {
    if(this.state.submeteucirurgia === "sim"){
    return (<div>
    <div>
      <TextField
       id="submeteucirurgiasim"
       label="Qual? Quando?"
       className={textaltered}
       value={this.state.submeteucirurgiasim}
       onChange={this.handleChange('submeteucirurgiasim')}
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
  if(this.state.iddoaluno === ""){
      alert('Adicione o ID do Aluno')
  }else{
    //AJUSTAR DATANASCIMENTO
      Axios.post(`http://projeto-extensao-backend.herokuapp.com/saude_geral`, {
        iddoaluno : this.state.iddoaluno,
        temoutevedesmaios : this.state.temoutevedesmaios,
        temouteveconvulsão: this.state.temouteveconvulsão,
        medicaçãousocontínuo: this.state.medicaçãousocontínuo,
        medicaçãousocontínuosim: this.state.medicaçãousocontínuosim,
        acompanhandopormédico: this.state.acompanhandopormédico,
        temdiabetes: this.state.temdiabetes,
        temhipertensão: this.state.temhipertensão,
        apresentaproblemasrespiratórios: this.state.apresentaproblemasrespiratórios,
        apresentaproblemasnocoração: this.state.apresentaproblemasnocoração,
        apresentaproblemasnocoraçãosim: this.state.apresentaproblemasnocoraçãosim,
        submeteucirurgia: this.state.submeteucirurgia,
        submeteucirurgiasim: this.state.submeteucirurgiasim,
        estagestante: this.state.estagestante,
        estagestantesim: this.state.estagestantesim,
        faztratamentoespecializado: this.state.faztratamentoespecializado,
        faztratamentoespecializadosim: this.state.faztratamentoespecializadosim,
        necessidadeespecial: this.state.necessidadeespecial,
        utilizaçãoserviçodesaúde: this.state.utilizaçãoserviçodesaúde,
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
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Tem ou teve desmaios ?</FormLabel>
          <RadioGroup
            aria-label="temoutevedesmaios"
            name="temoutevedesmaios"
            className={classes.group}
            value={this.state.temoutevedesmaios}
            onChange={this.handleChangeRadio('temoutevedesmaios')}
            row
          >
            <FormControlLabel value="não" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="sim" control={<Radio color='primary'/>} label="Sim" />
          </RadioGroup>

        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Tem ou teve episódio convulsivo/convulsão ?</FormLabel>
          <RadioGroup
            aria-label="temouteveconvulsão"
            name="temouteveconvulsão"
            className={classes.group}
            value={this.state.temouteveconvulsão}
            onChange={this.handleChangeRadio('temouteveconvulsão')}
            row
          >
             <FormControlLabel value="não" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="sim" control={<Radio color='primary'/>} label="Sim" />
          </RadioGroup>

        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Toma alguma medicação de uso contínuo ?</FormLabel>
          <RadioGroup
            aria-label="medicaçãousocontínuo"
            name="medicaçãousocontínuo"
            className={classes.group}
            value={this.state.medicaçãousocontínuo}
            onChange={this.handleChangeRadio('medicaçãousocontínuo')}
            row
          >
            <FormControlLabel value="não" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="sim" control={<Radio color='primary'/>} label="Sim" />
          </RadioGroup>
          {this.alunoMedicaçãoUsoContínuo()}

        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>É acompanhado por médico ?</FormLabel>
          <RadioGroup
            aria-label="acompanhandopormédico"
            name="acompanhandopormédico"
            className={classes.group}
            value={this.state.acompanhandopormédico}
            onChange={this.handleChangeRadio('acompanhandopormédico')}
            row
          >
            <FormControlLabel value="não" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="sim" control={<Radio color='primary'/>} label="Sim" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Tem diabetes ?</FormLabel>
          <RadioGroup
            aria-label="temdiabetes"
            name="temdiabetes"
            className={classes.group}
            value={this.state.temdiabetes}
            onChange={this.handleChangeRadio('temdiabetes')}
            row
          >
            <FormControlLabel value="não" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="sim" control={<Radio color='primary'/>} label="Sim" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Tem Hipertensão ?</FormLabel>
          <RadioGroup
            aria-label="temhipertensão"
            name="temhipertensão"
            className={classes.group}
            value={this.state.temhipertensão}
            onChange={this.handleChangeRadio('temhipertensão')}
            row
          >
            <FormControlLabel value="não" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="sim" control={<Radio color='primary'/>} label="Sim" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Apresenta ou apresentou problemas respiratórios ?</FormLabel>
          <RadioGroup
            aria-label="apresentaproblemasrespiratórios"
            name="apresentaproblemasrespiratórios"
            className={classes.group}
            value={this.state.apresentaproblemasrespiratórios}
            onChange={this.handleChangeRadio('apresentaproblemasrespiratórios')}
            row
          >
            <FormControlLabel value="não" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="sim" control={<Radio color='primary'/>} label="Sim" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Apresenta ou apresentou problemas no coração ?</FormLabel>
          <RadioGroup
            aria-label="apresentaproblemasnocoração"
            name="apresentaproblemasnocoração"
            className={classes.group}
            value={this.state.apresentaproblemasnocoração}
            onChange={this.handleChangeRadio('apresentaproblemasnocoração')}
            row
          >
            <FormControlLabel value="não" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="sim" control={<Radio color='primary'/>} label="Sim" />
          </RadioGroup>
          {this.alunoProblemaCoração()}
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Já se submeteu a alguma cirurgia ?</FormLabel>
          <RadioGroup
            aria-label="submeteucirurgia"
            name="submeteucirurgia"
            className={classes.group}
            value={this.state.submeteucirurgia}
            onChange={this.handleChangeRadio('submeteucirurgia')}
            row
          >
            <FormControlLabel value="não" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="sim" control={<Radio color='primary'/>} label="Sim" />
          </RadioGroup>
          {this.alunoSubmeteuCirurgia(classes.root, classes.textAltered)}
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Está gestante ?</FormLabel>
          <RadioGroup
            aria-label="estagestante"
            name="estagestante"
            className={classes.group}
            value={this.state.estagestante}
            onChange={this.handleChangeRadio('estagestante')}
            row
          >
            <FormControlLabel value="não" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="sim" control={<Radio color='primary'/>} label="Sim" />
          </RadioGroup>
          {this.alunoEstaGestante()}
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Faz algum tratamento especializado ?</FormLabel>
          <RadioGroup
            aria-label="faztratamentoespecializado"
            name="faztratamentoespecializado"
            className={classes.group}
            value={this.state.faztratamentoespecializado}
            onChange={this.handleChangeRadio('faztratamentoespecializado')}
            row
          >
            <FormControlLabel value="não" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="psicólogo" control={<Radio color='primary'/>} label="Psicólogo" />
            <FormControlLabel value="fonoaudiólogo" control={<Radio color='primary'/>} label="Fonoaudiólogo" />
            <FormControlLabel value="odontólogo" control={<Radio color='primary'/>} label="Odontólogo" />
            <FormControlLabel value="nutricionista" control={<Radio color='primary'/>} label="Nutricionista" />
            <FormControlLabel value="outro" control={<Radio color='primary'/>} label="Outro" />
          </RadioGroup>
          {this.alunoFazTratamentoEspecializado()}
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Você possui alguma necessidade especial? Se sim, especifique</FormLabel>
          <RadioGroup
            aria-label="necessidadeespecial"
            name="necessidadeespecial"
            className={classes.group}
            value={this.state.necessidadeespecial}
            onChange={this.handleChangeRadio('necessidadeespecial')}
            row
          >
            <FormControlLabel value="não" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="altashabilidades" control={<Radio color='primary'/>} label="Altas Habilidades/Superdotação" />
            <FormControlLabel value="deficiênciafísicaauditiva" control={<Radio color='primary'/>} label="Deficiência Física Auditiva" />
            <FormControlLabel value="deficiênciaauditivaperda" control={<Radio color='primary'/>} label="Deficiência Auditiva - Perda " />
            <FormControlLabel value="deficiênciaauditivasurdez" control={<Radio color='primary'/>} label="Deficiência Auditiva - Surdez" />
            <FormControlLabel value="deficiênciavisualbaixa" control={<Radio color='primary'/>} label="Deficiência Visual - Baixa Visão" />
            <FormControlLabel value="deficiênciavisualcegueira" control={<Radio color='primary'/>} label="Deficiência Visual - Cegueira" />
            <FormControlLabel value="deficiênciaintelectual" control={<Radio color='primary'/>} label="Deficiência Intelectual" />
            <FormControlLabel value="deficiênciamúltipla" control={<Radio color='primary'/>} label="Deficiência Múltipla" />
            <FormControlLabel value="transtornoautismo" control={<Radio color='primary'/>} label="Transtorno do Espectro do Autismo (TEA)" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Com relação à utilização dos serviços de saúde ?</FormLabel>
          <RadioGroup
            aria-label="utilizaçãoserviçodesaúde"
            name="utilizaçãoserviçodesaúde"
            className={classes.group}
            value={this.state.utilizaçãoserviçodesaúde}
            onChange={this.handleChangeRadio('utilizaçãoserviçodesaúde')}
            row
          >
            <FormControlLabel value="utilizasus" control={<Radio color='primary'/>} label="Utilizo o Sistema Único de Saúde (SUS)" />
            <FormControlLabel value="serviçosparticulares" control={<Radio color='primary'/>} label="Serviços particulares" />
            <FormControlLabel value="planodesaúde" control={<Radio color='primary'/>} label="Plano de saúde" />
          </RadioGroup>
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