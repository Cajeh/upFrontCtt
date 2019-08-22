import React from 'react';
import PropTypes from 'prop-types';
import { withStyles} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import gray from '@material-ui/core/colors/grey';
import FormGroup from '@material-ui/core/FormGroup';
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
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';
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
    temrelacionamentoafetivo:'',
    relacionamentoconsidera:'',
    relacionamentoconsideraoutro:'',
    teverelaçãosexual:'',
    teverelaçãosexualsim:'',
    quantosparceiros:'',
    frequênciarelaçãosexual:'',
    relaçãoanaloral:'',
    orientaçãosexual:'',
    orientaçãosexualoutro:'',
    atraçãofísica:'',
    tevedst:'',
    tratamentodst:'',
    ondetratadst:'',
    usadroga:'',
    usadrogasim:'',
    usapreservativo:'',
    usapreservativonao:'',
    usadrogasexo:'',
    usadrogasexooutro:'',
    comoobterinformaçãooutro:'',
    internet:false,
    jornal:false,
    televisão:false,
    amigos:false,
    revistas:false,
    outro: false,
    exameaids:'',
    prevençãoaids:'',
    prevençãoaidsoutro:'',
    avaliaconhecimentoaids:'',
    iddoaluno:''
  };


  handleChangeSwitch1 = name => event => {
    this.setState({ [name]: event.target.checked });
  };


  alunoConsideraRelacionamento = (classeroot, classtextfieldnumero) => {
    if(this.state.relacionamentoconsidera === "6"){
    return (<div>
    <div className={classeroot}>
      <TextField
       id="relacionamentoconsideraoutro"
       label="Que tipo?"
       className={classtextfieldnumero}
       value={this.state.relacionamentoconsideraoutro}
       onChange={this.handleChange('relacionamentoconsideraoutro')}
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
  alunoTeveRelaçãoSexual = (classeroot, classtextfieldnumero) => {
    if(this.state.teverelaçãosexual === "2"){
    return (<div>
    <div className={classeroot}>
      <TextField
       id="teverelaçãosexualsim"
       label="Que idade?"
       className={classtextfieldnumero}
       value={this.state.teverelaçãosexualsim}
       onChange={this.handleChange('teverelaçãosexualsim')}
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
  alunoOrientaçãoSexual = (classeroot, classtextfieldnumero) => {
    if(this.state.orientaçãosexual === "5"){
    return (<div>
    <div className={classeroot}>
      <TextField
       id="orientaçãosexualoutro"
       label="Qual?"
       className={classtextfieldnumero}
       value={this.state.orientaçãosexualoutro}
       onChange={this.handleChange('orientaçãosexualoutro')}
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
  alunoUsaDroga = (classeroot, classtextfieldnumero) => {
    if(this.state.usadroga === "3"){
    return (<div>
    <div className={classeroot}>
      <TextField
       id="usadrogasim"
       label="Qual?"
       className={classtextfieldnumero}
       value={this.state.usadrogasim}
       onChange={this.handleChange('usadrogasim')}
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
  alunoUsaDrogaSexo = (classeroot, classtextfieldnumero) => {
    if(this.state.usadrogasexo === "9"){
    return (<div>
    <div className={classeroot}>
      <TextField
       id="usadrogasexooutro"
       label="Qual?"
       className={classtextfieldnumero}
       value={this.state.usadrogasexooutro}
       onChange={this.handleChange('usadrogasexooutro')}
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
  alunoComoObterInformação = (classeroot, classtextfieldnumero) => {
    if(this.state.outro === true){
    return (<div>
    <div className={classeroot}>
      <TextField
       id="comoobterinformaçãooutro"
       label="Através de..."
       className={classtextfieldnumero}
       value={this.state.comoobterinformaçãooutro}
       onChange={this.handleChange('comoobterinformaçãooutro')}
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
  alunoPrevençãoAids = (classeroot, classtextfieldnumero) => {
    if(this.state.prevençãoaids === "7"){
    return (<div>
    <div className={classeroot}>
      <TextField
       id="prevençãoaidsoutro"
       label="Como ?"
       className={classtextfieldnumero}
       value={this.state.prevençãoaidsoutro}
       onChange={this.handleChange('prevençãoaidsoutro')}
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
    if(this.state.iddoaluno === ''){
        alert('Adicione o ID do Aluno')
    }else{
      //AJUSTAR DATANASCIMENTO
        Axios.post(`http://projeto-extensao-backend.herokuapp.com/enfermagem`, {
          iddoaluno : this.state.iddoaluno,
          avaliaconhecimentoaids: this.state.avaliaconhecimentoaids,
          prevençãoaidsoutro: this.state.prevençãoaidsoutro,
          prevençãoaids: this.state.prevençãoaids,
          exameaids: this.state.exameaids,
          outro: this.state.outro,
          revistas: this.state.revistas,
          televisão: this.state.televisão,
          jornal: this.state.jornal,
          internet: this.state.internet,
          comoobterinformaçãooutro: this.state.comoobterinformaçãooutro,
          usadrogasexooutro: this.state.usadrogasexooutro,
          usadrogasexo: this.state.usadrogasexo,
          usapreservativonao: this.state.usapreservativonao,
          usapreservativo: this.state.usapreservativo,
          usadrogasim: this.state.usadrogasim,
          usadroga: this.state.usadroga,
          ondetratadst: this.state.ondetratadst,
          tratamentodst: this.state.tratamentodst,
          tevedst: this.state.tevedst,
          atraçãofísica: this.state.atraçãofísica,
          orientaçãosexualoutro: this.state.orientaçãosexualoutro,
          orientaçãosexual: this.state.orientaçãosexual,
          relaçãoanaloral: this.state.relaçãoanaloral,
          frequênciarelaçãosexual: this.state.frequênciarelaçãosexual,
          quantosparceiros: this.state.quantosparceiros,
          teverelaçãosexualsim: this.state.teverelaçãosexualsim,
          teverelaçãosexual: this.state.teverelaçãosexual,
      relacionamentoconsideraoutro: this.state.relacionamentoconsideraoutro,
      relacionamentoconsidera: this.state.relacionamentoconsidera,
      temrelacionamentoafetivo: this.state.temrelacionamentoafetivo,
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
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Você tem um relacionamento afetivo com outra pessoa ?</FormLabel>
          <RadioGroup
            aria-label="temrelacionamentoafetivo"
            name="temrelacionamentoafetivo"
            className={classes.group}
            value={this.state.temrelacionamentoafetivo}
            onChange={this.handleChange('temrelacionamentoafetivo')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Sim, com uma pessoa do sexo oposto" />
            <FormControlLabel value="3" control={<Radio color='primary'/>} label="Sim, com uma pessoa do mesmo sexo" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Em relação a esse relacionamento você considera</FormLabel>
          <RadioGroup
            aria-label="relacionamentoconsidera"
            name="relacionamentoconsidera"
            className={classes.group}
            value={this.state.relacionamentoconsidera}
            onChange={this.handleChange('relacionamentoconsidera')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Só ficando (Não tem relação sexual)" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Só ficando (Tem relação sexual)" />
            <FormControlLabel value="3" control={<Radio color='primary'/>} label="Namoro (Não tem relação sexual)" />
            <FormControlLabel value="4" control={<Radio color='primary'/>} label="Namoro (Tem relação sexual)" />
            <FormControlLabel value="5" control={<Radio color='primary'/>} label="Não tenho relacionamento" />
            <FormControlLabel value="6" control={<Radio color='primary'/>} label="Outro" />
          </RadioGroup>
          {this.alunoConsideraRelacionamento()}

        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Já teve Relação Sexual ?</FormLabel>
          <RadioGroup
            aria-label="teverelaçãosexual"
            name="teverelaçãosexual"
            className={classes.group}
            value={this.state.teverelaçãosexual}
            onChange={this.handleChange('teverelaçãosexual')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Sim" />
          </RadioGroup>
          {this.alunoTeveRelaçãoSexual()}

        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Quantos parceiros (as) você já teve, desde a sua primeira vez ?</FormLabel>
          <RadioGroup
            aria-label="quantosparceiros"
            name="quantosparceiros"
            className={classes.group}
            value={this.state.quantosparceiros}
            onChange={this.handleChange('quantosparceiros')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Nenhum" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Um" />
            <FormControlLabel value="3" control={<Radio color='primary'/>} label="Um a Dois" />
            <FormControlLabel value="4" control={<Radio color='primary'/>} label="Dois a Três" />
            <FormControlLabel value="5" control={<Radio color='primary'/>} label="Mais de Três" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Com que frequência você tem relações sexuais ?</FormLabel>
          <RadioGroup
            aria-label="frequênciarelaçãosexual"
            name="frequênciarelaçãosexual"
            className={classes.group}
            value={this.state.frequênciarelaçãosexual}
            onChange={this.handleChange('frequênciarelaçãosexual')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não tenho relação sexual" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Todos os dias" />
            <FormControlLabel value="3" control={<Radio color='primary'/>} label="Uma vez na semana" />
            <FormControlLabel value="4" control={<Radio color='primary'/>} label="Duas vezes na semana" />
            <FormControlLabel value="5" control={<Radio color='primary'/>} label="Três vezes na semana" />
            <FormControlLabel value="6" control={<Radio color='primary'/>} label="Uma vez ao mês" />
            <FormControlLabel value="7" control={<Radio color='primary'/>} label="Duas vezes ao mês" />
            <FormControlLabel value="8" control={<Radio color='primary'/>} label="Três vezes ao mês" />
            <FormControlLabel value="9" control={<Radio color='primary'/>} label="Menos de uma vez ao mês" />
            <FormControlLabel value="10" control={<Radio color='primary'/>} label="Não Informou" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Nos últimos 30 dias você teve relação sexual (anal ou oral) ?</FormLabel>
          <RadioGroup
            aria-label="relaçãoanaloral"
            name="relaçãoanaloral"
            className={classes.group}
            value={this.state.relaçãoanaloral}
            onChange={this.handleChange('relaçãoanaloral')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Sim, oral" />
            <FormControlLabel value="3" control={<Radio color='primary'/>} label="Sim, anal" />
            <FormControlLabel value="4" control={<Radio color='primary'/>} label="Sim, anal e oral" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Em relação a sua orientação sexual, você se considera ?</FormLabel>
          <RadioGroup
            aria-label="orientaçãosexual"
            name="orientaçãosexual"
            className={classes.group}
            value={this.state.orientaçãosexual}
            onChange={this.handleChange('orientaçãosexual')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Heterossexual" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Homossexual" />
            <FormControlLabel value="3" control={<Radio color='primary'/>} label="Bissexual" />
            <FormControlLabel value="4" control={<Radio color='primary'/>} label="Não Informou" />
            <FormControlLabel value="5" control={<Radio color='primary'/>} label="Outro" />
          </RadioGroup>
          {this.alunoOrientaçãoSexual()}

        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Você tem mais atração física por ?</FormLabel>
          <RadioGroup
            aria-label="atraçãofísica"
            name="atraçãofísica"
            className={classes.group}
            value={this.state.atraçãofísica}
            onChange={this.handleChange('atraçãofísica')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Homens" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Mulheres" />
            <FormControlLabel value="3" control={<Radio color='primary'/>} label="Homens e Mulheres" />
          </RadioGroup>
          
        </FormControl>
      </div>
      <div className={classes.root}>
      <Typography component="div">
      <Box fontWeight={300} textAlign='left' fontSize={22} fontFamily='Alegreya Sans' style={{color:'#4e5180'}} m={1}>
      FATORES DE RISCO E EXPOSIÇÃO PARA DST/HIV/AIDS
      </Box>
    </Typography>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Você já teve alguma doença sexualmente transmissível (DST) nos últimos seis meses ?</FormLabel>
          <RadioGroup
            aria-label="tevedst"
            name="tevedst"
            className={classes.group}
            value={this.state.tevedst}
            onChange={this.handleChange('tevedst')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não Respondeu" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Não sei Informar" />
            <FormControlLabel value="3" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="4" control={<Radio color='primary'/>} label="Sim" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Você já fez tratamento para alguma doença sexualmente transmissível?</FormLabel>
          <RadioGroup
            aria-label="tratamentodst"
            name="tratamentodst"
            className={classes.group}
            value={this.state.tratamentodst}
            onChange={this.handleChange('tratamentodst')}
            row
          >
            
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não Lembro" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Não respondeu" />
            <FormControlLabel value="3" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="4" control={<Radio color='primary'/>} label="Sim" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Onde você fez o tratamento para a doença sexualmente transmissível ?</FormLabel>
          <RadioGroup
            aria-label="ondetratadst"
            name="ondetratadst"
            className={classes.group}
            value={this.state.ondetratadst}
            onChange={this.handleChange('ondetratadst')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não Tratou" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Não respondeu" />
            <FormControlLabel value="3" control={<Radio color='primary'/>} label="Nunca tive" />
            <FormControlLabel value="4" control={<Radio color='primary'/>} label="Automedicação" />
            <FormControlLabel value="5" control={<Radio color='primary'/>} label="Serviço de Saúde" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Você faz uso de alguma droga ?</FormLabel>
          <RadioGroup
            aria-label="usadroga"
            name="usadroga"
            className={classes.group}
            value={this.state.usadroga}
            onChange={this.handleChange('usadroga')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não Respondeu" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="3" control={<Radio color='primary'/>} label="Sim" />
          </RadioGroup>
          {this.alunoUsaDroga()}
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Você já usou alguma dessas drogas antes de ter relação sexual ?</FormLabel>
          <RadioGroup
            aria-label="usadrogasexo"
            name="usadrogasexo"
            className={classes.group}
            value={this.state.usadrogasexo}
            onChange={this.handleChange('usadrogasexo')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Nunca Usei Drogas" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Nunca tive relação sexual" />
            <FormControlLabel value="3" control={<Radio color='primary'/>} label="Álcool" />
            <FormControlLabel value="4" control={<Radio color='primary'/>} label="Maconha" />
            <FormControlLabel value="5" control={<Radio color='primary'/>} label="Cocaína" />
            <FormControlLabel value="6" control={<Radio color='primary'/>} label="Crack" />
            <FormControlLabel value="7" control={<Radio color='primary'/>} label="LSD" />
            <FormControlLabel value="8" control={<Radio color='primary'/>} label="Heroína" />
            <FormControlLabel value="9" control={<Radio color='primary'/>} label="Outra" />

          </RadioGroup>
          {this.alunoUsaDrogaSexo()}
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Você faz o uso de preservativo, durante as relações sexuais?</FormLabel>
          <RadioGroup
            aria-label="usapreservativo"
            name="usapreservativo"
            className={classes.group}
            value={this.state.usapreservativo}
            onChange={this.handleChange('usapreservativo')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Não Respondeu" />
            <FormControlLabel value="3" control={<Radio color='primary'/>} label="Nunca Tive" />
            <FormControlLabel value="4" control={<Radio color='primary'/>} label="Sim, as Vezes" />
            <FormControlLabel value="5" control={<Radio color='primary'/>} label="Sim, Sempre" />

          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Por qual motivo você não usou ?</FormLabel>
          <RadioGroup
            aria-label="usapreservativonao"
            name="usapreservativonao"
            className={classes.group}
            value={this.state.usapreservativonao}
            onChange={this.handleChange('usapreservativonao')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Sempre Uso" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Fatores pessoais" />
            <FormControlLabel value="3" control={<Radio color='primary'/>} label="Fatores relacionados ao parceiro" />
            <FormControlLabel value="4" control={<Radio color='primary'/>} label="Fatores externos" />
            <FormControlLabel value="5" control={<Radio color='primary'/>} label="Não acredita na eficácia" />
            <FormControlLabel value="6" control={<Radio color='primary'/>} label="Acha que não vai adquirir doença(s)" />
            <FormControlLabel value="7" control={<Radio color='primary'/>} label="Deseja ter filhos" />
            <FormControlLabel value="8" control={<Radio color='primary'/>} label="Acha a camisinha grande" />
            <FormControlLabel value="9" control={<Radio color='primary'/>} label="Acha a camisinha pequena" />
            <FormControlLabel value="10" control={<Radio color='primary'/>} label="Não tem condições para comprar" />
a
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Como você obtém informações acerca de HIV/AIDS ?</FormLabel>
          <FormGroup 
          row
          >
            <FormControlLabel value="1" control={<Checkbox checked={this.state.internet} onChange={this.handleChangeCheckboxloco('internet')} color='primary'/>} label="Internet" />
            <FormControlLabel value="2" control={<Checkbox checked={this.state.televisão} onChange={this.handleChangeCheckboxloco('televisão')} color='primary'/>} label="Televisão" />
            <FormControlLabel value="3" control={<Checkbox checked={this.state.amigos} onChange={this.handleChangeCheckboxloco('amigos')} color='primary'/>} label="Amigos/Colegas" />
            <FormControlLabel value="4" control={<Checkbox checked={this.state.jornal} onChange={this.handleChangeCheckboxloco('jornal')} color='primary'/>} label="Jornal" />
            <FormControlLabel value="5" control={<Checkbox checked={this.state.revistas} onChange={this.handleChangeCheckboxloco('revistas')} color='primary'/>} label="Revistas" />
            <FormControlLabel value="6" control={<Checkbox checked={this.state.outro} onChange={this.handleChangeCheckboxloco('outro')} color='primary'/>} label="Outro" />
          </FormGroup>
          <FormHelperText>Escolha quantos quiser</FormHelperText>
          {this.alunoComoObterInformação()}
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Você já fez exames para saber se está infectado pelo vírus da AIDS ?</FormLabel>
          <RadioGroup
            aria-label="exameaids"
            name="exameaids"
            className={classes.group}
            value={this.state.exameaids}
            onChange={this.handleChange('exameaids')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Sim" />
          </RadioGroup>

        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Alguma vez você já usou algo para prevenir a AIDS, como ?</FormLabel>
          <RadioGroup
            aria-label="prevençãoaids"
            name="prevençãoaids"
            className={classes.group}
            value={this.state.prevençãoaids}
            onChange={this.handleChange('prevençãoaids')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Camisinha" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Diafragma" />
            <FormControlLabel value="3" control={<Radio color='primary'/>} label="Espuma" />
            <FormControlLabel value="4" control={<Radio color='primary'/>} label="Ducha" />
            <FormControlLabel value="5" control={<Radio color='primary'/>} label="Coito Interrompido" />
            <FormControlLabel value="6" control={<Radio color='primary'/>} label="Pílula Anticoncepcional" />
            <FormControlLabel value="7" control={<Radio color='primary'/>} label="Outro" />
          </RadioGroup>
          {this.alunoPrevençãoAids()}
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Como você avalia seu nível de conhecimento sobre HIV/AIDS ?</FormLabel>
          <RadioGroup
            aria-label="avaliaconhecimentoaids"
            name="avaliaconhecimentoaids"
            className={classes.group}
            value={this.state.avaliaconhecimentoaids}
            onChange={this.handleChange('avaliaconhecimentoaids')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não conheço nada sobre o assunto" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Conheço muito mal o assunto" />
            <FormControlLabel value="3" control={<Radio color='primary'/>} label="Conheço pouco o assunto" />
            <FormControlLabel value="4" control={<Radio color='primary'/>} label="Conheço bem o assunto" />
            <FormControlLabel value="5" control={<Radio color='primary'/>} label="Conheço muito bem o assunto" />
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