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
  nutritionField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '10%',
  },
  textFieldNumero: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '15%',
  },
  familiarTextField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '70%',
  },
  fab: {
    width:100
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
    color:'#025c'
  },
  fontInput:{
    fontWeight:'bold',
  }
});


class TextFields extends React.Component {
  state = {
    sobtratamento:'',
    sobtratamentosim:'',
    usoalgummedicamento:'',
    usoalgummedicamentosim:'',
    tevedoençagrave:'',
    tevedoençagravesim:'',
    passouporcirurgia:'',
    alergicoreaçãoadversa:'',
    alergicoreaçãoadversasim:'',
    gravidaamamentando:'',
    temsensibilidade:'',
    usaaparelho:'',
    escovaquantasvezes:'',
    usa:'',
    iddoaluno:''
  };


  handleChangeSwitch1 = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  alunoSobTratamento = ( classtextfieldnumero) => {
    if(this.state.sobtratamento === '2'){
    return (<div>
    <div >
      <TextField
       id="sobtratamentosim"
       label="Qual?"
       className={classtextfieldnumero}
       value={this.state.sobtratamentosim}
       onChange={this.handleChange('sobtratamentosim')}
       margin="normal"
       variant='outlined'
     />
   </div>
   </div>)
    }else{
      return(
      <div >
      </div>)
    }
  }
  alunoSobMedicamento = ( classtextfieldnumero) => {
    if(this.state.usoalgummedicamento === '2'){
    return (<div>
    <div >
      <TextField
       id="usoalgummedicamentosim"
       label="Qual(is)?"
       className={classtextfieldnumero}
       value={this.state.usoalgummedicamentosim}
       onChange={this.handleChange('usoalgummedicamentosim')}
       margin="normal"
       variant='outlined'
     />
   </div>
   </div>)
    }else{
      return(
      <div >
      </div>)
    }
  }
  alunoTeveDoençaGrave = ( classtextfieldnumero) => {
    if(this.state.tevedoençagrave === '2'){
    return (<div>
    <div >
      <TextField
       id="tevedoençagravesim"
       label="Qual(is)?"
       className={classtextfieldnumero}
       value={this.state.tevedoençagravesim}
       onChange={this.handleChange('tevedoençagravesim')}
       margin="normal"
       variant='outlined'
     />
   </div>
   </div>)
    }else{
      return(
      <div >
      </div>)
    }
  }
  alunoAlergicoReaçãoAdversa = ( classtextfieldnumero) => {
    if(this.state.alergicoreaçãoadversa === '2'){
    return (<div>
    <div >
      <TextField
       id="alergicoreaçãoadversasim"
       label="Qual(is)?"
       className={classtextfieldnumero}
       value={this.state.alergicoreaçãoadversasim}
       onChange={this.handleChange('alergicoreaçãoadversasim')}
       margin="normal"
       variant='outlined'
     />
   </div>
   </div>)
    }else{
      return(
      <div >
      </div>)
    }
  }
  salvarDados = () => {
    if(this.state.iddoaluno === ""){
        alert('Adicione o ID do Aluno')
    }else{
      //AJUSTAR DATANASCIMENTO
        Axios.post(`http://projeto-extensao-backend.herokuapp.com/odontologia`, {
          sobtratamento:this.state.sobtratamento,
    sobtratamentosim:this.state.sobtratamentosim,
    usoalgummedicamento:this.state.usoalgummedicamento,
    usoalgummedicamentosim:this.state.usoalgummedicamentosim,
    tevedoençagrave:this.state.tevedoençagrave,
    tevedoençagravesim:this.state.tevedoençagravesim,
    passouporcirurgia:this.state.passouporcirurgia,
    alergicoreaçãoadversa:this.state.alergicoreaçãoadversa,
    alergicoreaçãoadversasim:this.state.alergicoreaçãoadversasim,
    gravidaamamentando:this.state.gravidaamamentando,
    temsensibilidade:this.state.temsensibilidade,
    usaaparelho:this.state.usaaparelho,
    escovaquantasvezes:this.state.escovaquantasvezes,
    usa:this.state.usa,
    iddoaluno:this.state.iddoaluno
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleChangeRadio = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleChangeCheckboxloco = name => event => {
    this.setState({ ...this.state, [name]: event.target.checked });
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
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Você está sob tratamento médico ?</FormLabel>
          <RadioGroup
            aria-label="sobtratamento"
            name="sobtratamento"
            className={classes.group}
            value={this.state.sobtratamento}
            onChange={this.handleChangeRadio('sobtratamento')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Sim" />
          </RadioGroup>
          {this.alunoSobTratamento()}

        </FormControl>
        
      </div>
      
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Faz uso de algum medicamento ?</FormLabel>
          <RadioGroup
            aria-label="usoalgummedicamento"
            name="usoalgummedicamento"
            className={classes.group}
            value={this.state.usoalgummedicamento}
            onChange={this.handleChangeRadio('usoalgummedicamento')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Sim" />
          </RadioGroup>
          {this.alunoSobMedicamento()}

        </FormControl>
        
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Tem ou teve uma doença grave ?</FormLabel>
          <RadioGroup
            aria-label="tevedoençagrave"
            name="tevedoençagrave"
            className={classes.group}
            value={this.state.tevedoençagrave}
            onChange={this.handleChangeRadio('tevedoençagrave')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Sim" />
          </RadioGroup>
          {this.alunoTeveDoençaGrave()}

        </FormControl>
        
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Passou por alguma cirurgia nos últimos 5 anos ?</FormLabel>
          <RadioGroup
            aria-label="passouporcirurgia"
            name="passouporcirurgia"
            className={classes.group}
            value={this.state.passouporcirurgia}
            onChange={this.handleChangeRadio('passouporcirurgia')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Sim" />
          </RadioGroup>

        </FormControl>
        
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>É alérgico ou tem reação adversa a algum medicamento ?</FormLabel>
          <RadioGroup
            aria-label="alergicoreaçãoadversa"
            name="alergicoreaçãoadversa"
            className={classes.group}
            value={this.state.alergicoreaçãoadversa}
            onChange={this.handleChangeRadio('alergicoreaçãoadversa')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Sim" />
          </RadioGroup>
      {this.alunoAlergicoReaçãoAdversa()}
        </FormControl>
        
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Está grávida ou amamentando ?</FormLabel>
          <RadioGroup
            aria-label="gravidaamamentando"
            name="gravidaamamentando"
            className={classes.group}
            value={this.state.gravidaamamentando}
            onChange={this.handleChangeRadio('gravidaamamentando')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Sim" />
          </RadioGroup>

        </FormControl>
        
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Tem sensibilidade ?</FormLabel>
          <RadioGroup
            aria-label="temsensibilidade"
            name="temsensibilidade"
            className={classes.group}
            value={this.state.temsensibilidade}
            onChange={this.handleChangeRadio('temsensibilidade')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Sim" />
          </RadioGroup>

        </FormControl>
        
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Usa aparelho ortodôntico ?</FormLabel>
          <RadioGroup
            aria-label="usaaparelho"
            name="usaaparelho"
            className={classes.group}
            value={this.state.usaaparelho}
            onChange={this.handleChangeRadio('usaaparelho')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Sim" />
          </RadioGroup>

        </FormControl>
        
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Escova os dentes quantas vezes ao dia ?</FormLabel>
          <RadioGroup
            aria-label="escovaquantasvezes"
            name="escovaquantasvezes"
            className={classes.group}
            value={this.state.escovaquantasvezes}
            onChange={this.handleChangeRadio('escovaquantasvezes')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Sim" />
          </RadioGroup>

        </FormControl>
        
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Usa fio dental ?</FormLabel>
          <RadioGroup
            aria-label="usafiodental"
            name="usafiodental"
            className={classes.group}
            value={this.state.usafiodental}
            onChange={this.handleChangeRadio('usafiodental')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Sim" />
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