import React from 'react';
import PropTypes from 'prop-types';
import { withStyles} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import gray from '@material-ui/core/colors/grey';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import { unstable_Box as Box } from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import NavigationIcon from '@material-ui/icons/Navigation';
import Assignment from '@material-ui/icons/AssignmentInd';
import Fab from '@material-ui/core/Fab';
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
    fontSize:20,
    fontWeight:300,
    color:'#5c5765'
  },
  fontInput:{
    fontWeight:'bold',
  }
});

class TextFields extends React.Component {
  state = {
    iddoaluno:'',
    temparentes:'',
    temparentessim:'',
    rua: '',
    zona: '',
    ficoudoente: '',
    participareuniao: '',
    participalimpeza: '',
    municipio:'',
    nomepai: '',
    nomemae: '',
    filiação: '',
    age: '',
    curso:'',
    turno:'',
    cor:'',
    terceiroestado: 'EUR',
    graudeparentesco:'',
    menoridade: false,
    enderecodiferente: false,
    residente: false,
    nomeresponsavel:'',
  };

  handleChangeSwitch1 = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  salvarDados = () => {
    if(this.state.iddoaluno === ''){
        alert('Adicione o ID do Aluno')
    }else{
        Axios.post(`http://projeto-extensao-backend.herokuapp.com/residencia`, {
          iddoaluno:this.state.iddoaluno,
          temparentes:this.state.temparentes,
          temparentessim:this.state.temparentessim,
          rua: this.state.rua,
          zona: this.state.zona,
          ficoudoente: this.state.ficoudoente,
          participareuniao: this.state.participareuniao,
          participalimpeza: this.state.participalimpeza,
          municipio:this.state.municipio,
          nomepai: this.state.nomepai,
          nomemae: this.state.nomemae,
          filiação: this.state.filiação,
          age: this.state.age,
          curso:this.state.curso,
          turno:this.state.turno,
          cor:this.state.cor,
          terceiroestado: this.state.terceiroestado,
          graudeparentesco:this.state.graudeparentesco,
          menoridade: this.state.menoridade,
          enderecodiferente: this.state.enderecodiferente,
          residente: this.state.residente,
          nomeresponsavel:this.state.nomeresponsavel,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
}
  ajusteSimNaoResidente = () => {
    if(this.state.residente){
    return (<div>
   <Typography component="div">
      <Box fontWeight={400} textAlign='left' fontSize={20} fontFamily='Alegreya Sans' style={{color:'green'}} m={1}>
        Sim
      </Box>
    </Typography>
   </div>)
    }else{
      return(
      <div>
      <Typography component="div">
      <Box fontWeight={400} textAlign='left' fontSize={20} fontFamily='Alegreya Sans' style={{color:'green'}} m={1}>
        Não
      </Box>
    </Typography>
      </div>)
    }
  }
  alunoMedicaçãoUsoContinuo = (classeroot, classtextfieldnumero,classecontainer,classeformcontrol,numeroresponsavel) => {
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
  alunoTemParentes= (classeroot, classtextfieldnumero,classecontainer,classeformcontrol,numeroresponsavel) => {
    if(this.state.temparentes === "sim"){
    return (<div>
    <div className={classeroot}>
      <TextField
       id="temparentessim"
       label="Quem?"
       className={classtextfieldnumero}
       value={this.state.temparentessim}
       onChange={this.handleChange('temparentessim')}
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

  alunoResidente = (classeroot, classtextfieldfirst,classeformcontrol,classtextfield3em1linhaleft,cep,classestextfieldmax,classesformcontroldoubleradio,classesgroup) => {
    if(this.state.residente){
    return (<div >
    <div>
        <div className={classeroot}>
     <FormControl component="fieldset" className={classesformcontroldoubleradio}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Possui parentes ou amigos em Teresina?</FormLabel>
          <RadioGroup
            aria-label="temparentes"
            name="temparentes"
            className={classesgroup}
            value={this.state.temparentes}
            onChange={this.handleChangeRadio('temparentes')}
          >
            <FormControlLabel value="nao" control={<Radio checked={this.state.temparentes === 'nao'} color='primary'/>} label="Não" />
            <FormControlLabel value="sim" control={<Radio checked={this.state.temparentes === 'sim'} color='primary'/>} label="Sim" />
          </RadioGroup>
          {this.alunoTemParentes()}
        </FormControl>  
   </div>
   <div className={classeroot}>
     <FormControl component="fieldset" className={classesformcontroldoubleradio}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Participa das reuniões?</FormLabel>
          <RadioGroup
            aria-label="participareuniao"
            name="participareuniao"
            className={classesgroup}
            value={this.state.participareuniao}
            onChange={this.handleChangeRadio('participareuniao')}
          >
            <FormControlLabel value="nao" control={<Radio checked={this.state.participareuniao === 'nao'} color='primary'/>} label="Não" />
            <FormControlLabel value="sim" control={<Radio checked={this.state.participareuniao === 'sim'} color='primary'/>} label="Sim" />
          </RadioGroup>
        </FormControl>  
   </div>
   <div className={classeroot}>
     <FormControl component="fieldset" className={classesformcontroldoubleradio}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Participa da limpeza do quarto?</FormLabel>
          <RadioGroup
            aria-label="participalimpeza"
            name="participalimpeza"
            className={classesgroup}
            value={this.state.participalimpeza}
            onChange={this.handleChangeRadio('participalimpeza')}
          >
            <FormControlLabel value="nao" control={<Radio checked={this.state.participalimpeza === 'nao'} color='primary'/>} label="Não" />
            <FormControlLabel value="sim" control={<Radio checked={this.state.participalimpeza === 'sim'} color='primary'/>} label="Sim" />
          </RadioGroup>
        </FormControl>  
   </div>
   <div className={classeroot}>
     <FormControl component="fieldset" className={classesformcontroldoubleradio}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Ficou doente?</FormLabel>
          <RadioGroup
            aria-label="ficoudoente"
            name="ficoudoente"
            className={classesgroup}
            value={this.state.ficoudoente}
            onChange={this.handleChangeRadio('ficoudoente')}
          >
            <FormControlLabel value="nao" control={<Radio checked={this.state.ficoudoente === 'nao'} color='primary'/>} label="Não" />
            <FormControlLabel value="sim" control={<Radio checked={this.state.ficoudoente === 'sim'} color='primary'/>} label="Sim" />
          </RadioGroup>
        </FormControl>  
   </div>
   </div>
   </div>)
    }else{
      return(
      <div className={classeroot}>
      </div>)
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
    const {cep} = this.state;
    return (
      <div>
      <CssBaseline />
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

<FormGroup className={classes.formControl} row>
  <FormControlLabel
    control={
      <Switch
        checked={this.state.residente}
        onChange={this.handleChangeSwitch1('residente')}
        value="residente"
        classes={{
          switchBase: classes.colorSwitchBase,
          checked: classes.colorChecked,
          bar: classes.colorBar,
        }}
      />
    }
    classes={{
            label:classes.fontSwitch
          }}
    label="O Aluno é Residente ?"
  />        {this.ajusteSimNaoResidente()}
</FormGroup>
</div>
{this.alunoResidente(classes.root,classes.textFieldFirst,classes.formControl,classes.textField3em1LinhaLeft,cep,classes.textFieldMax,classes.formControlDoubleRadio,classes.group)}
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