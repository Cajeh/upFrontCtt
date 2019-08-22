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
  familiarTextField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '70%',
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
    comorelacionamentofamiliar:'',
    usomedicamentospsiquiátricos:'',
    acompanhamentopsiquiátrico:'',
    avaliaqualidadedosono:'',

    tentativasuicídio:'',
    preconceito:'',
    conflitocomlei:'',
    desemprego:'',
    violenciabullying:'',
    problemasrelacionamento:'',
    alcoolismo:'',
    usodedrogas:'',
    problemafinanceiro:'',
    prefironãodeclarar:'',
    outrosituações:'',
    outrosituaçõesoutro:'',
    nenhumadassituações:'',

    tentativasuicídiofamiliar:'',
    preconceitofamiliar:'',
    conflitocomleifamiliar:'',
    desempregofamiliar:'',
    violenciabullyingfamiliar:'',
    problemasrelacionamentofamiliar:'',
    alcoolismofamiliar:'',
    usodedrogasfamiliar:'',
    problemafinanceirofamiliar:'',
    prefironãodeclararfamiliar:'',
    outrosituaçõesfamiliar:'',
    outrosituaçõesoutrofamiliar:'',
    nenhumadassituaçõesfamiliar:'',

    tentativasuicídiofamiliarsim:'',
    preconceitofamiliarsim:'',
    conflitocomleifamiliarsim:'',
    desempregofamiliarsim:'',
    violenciabullyingfamiliarsim:'',
    problemasrelacionamentofamiliarsim:'',
    alcoolismofamiliarsim:'',
    usodedrogasfamiliarsim:'',
    problemafinanceirofamiliarsim:'',
    prefironãodeclararfamiliarsim:'',
    outrosituaçõesfamiliarsim:'',
    outrosituaçõesoutrofamiliarsim:'',
    nenhumadassituaçõesfamiliarsim:'',

    familiaacompanhamento:'',


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

  alunoSituaçõesAconteceram = (classtextfieldnumero) => {
    if(this.state.outrosituações === true){
    return (<div>
    <div >
      <TextField
       id="outrosituaçõesoutro"
       label="Qual, fale sobre"
       className={classtextfieldnumero}
       value={this.state.outrosituaçõesoutro}
       onChange={this.handleChange('outrosituaçõesoutro')}
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
  alunoTentativaSuicidio = ( classtextfieldnumero) => {
    if(this.state.tentativasuicídiofamiliar === true){
    return (<div>
    <div >
      <TextField
       id="tentativasuicídiofamiliarsim"
       label="Tentativa de Suicídio"
       className={classtextfieldnumero}
       value={this.state.tentativasuicídiofamiliarsim}
       onChange={this.handleChange('tentativasuicídiofamiliarsim')}
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
  alunoPreconceito = ( classtextfieldnumero) => {
    if(this.state.preconceitofamiliar === true){
    return (<div>
    <div >
      <TextField
       id="preconceitofamiliarsim"
       label="Preconceito"
       className={classtextfieldnumero}
       value={this.state.preconceitofamiliarsim}
       onChange={this.handleChange('preconceitofamiliarsim')}
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
  alunoConflito = (classtextfieldnumero) => {
    if(this.state.conflitocomleifamiliar === true){
    return (<div>
    <div >
      <TextField
       id="conflitocomleifamiliarsim"
       label="Conflito com lei / Prisão"
       className={classtextfieldnumero}
       value={this.state.conflitocomleifamiliarsim}
       onChange={this.handleChange('conflitocomleifamiliarsim')}
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
  alunoDesemprego = (classtextfieldnumero) => {
    if(this.state.desempregofamiliar === true){
    return (<div>
    <div >
      <TextField
       id="desempregofamiliarsim"
       label="Desemprego"
       className={classtextfieldnumero}
       value={this.state.desempregofamiliarsim}
       onChange={this.handleChange('desempregofamiliarsim')}
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
  alunoViolência = ( classtextfieldnumero) => {
    if(this.state.violenciabullyingfamiliar === true){
    return (<div>
    <div >
      <TextField
       id="violenciabullyingfamiliarsim"
       label="Violência/ agressão"
       className={classtextfieldnumero}
       value={this.state.violenciabullyingfamiliarsim}
       onChange={this.handleChange('violenciabullyingfamiliarsim')}
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
  alunoProblemasRelacionamento = ( classtextfieldnumero) => {
    if(this.state.problemasrelacionamentofamiliar === true){
    return (<div>
    <div >
      <TextField
       id="problemasrelacionamentofamiliarsim"
       label="Problemas de Relacionaento"
       className={classtextfieldnumero}
       value={this.state.problemasrelacionamentofamiliarsim}
       onChange={this.handleChange('problemasrelacionamentofamiliarsim')}
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
  alunoProblemaFinanceiro = ( classtextfieldnumero) => {
    if(this.state.problemafinanceirofamiliar === true){
    return (<div>
    <div >
      <TextField
       id="problemafinanceirofamiliarsim"
       label="Problema finaceiro"
       className={classtextfieldnumero}
       value={this.state.problemafinanceirofamiliarsim}
       onChange={this.handleChange('problemafinanceirofamiliarsim')}
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
  alunoUsoDeDrogas = (classtextfieldnumero) => {
    if(this.state.usodedrogasfamiliar === true){
    return (<div>
    <div >
      <TextField
       id="usodedrogasfamiliarsim"
       label="Uso de Drogas"
       className={classtextfieldnumero}
       value={this.state.usodedrogasfamiliarsim}
       onChange={this.handleChange('usodedrogasfamiliarsim')}
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
  alunoAlcoolismo = (classtextfieldnumero) => {
    if(this.state.alcoolismofamiliar === true){
    return (<div>
    <div >
      <TextField
       id="alcoolismofamiliarsim"
       label="Alcoolismo"
       className={classtextfieldnumero}
       value={this.state.alcoolismofamiliarsim}
       onChange={this.handleChange('alcoolismofamiliarsim')}
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
  alunoOutroSituações = (classtextfieldnumero) => {
    if(this.state.outrosituaçõesfamiliar === true){
    return (<div>
    <div>
      <TextField
       id="outrosituaçõesfamiliarsim"
       label="Outras Situações"
       className={classtextfieldnumero}
       value={this.state.outrosituaçõesfamiliarsim}
       onChange={this.handleChange('outrosituaçõesfamiliarsim')}
       margin="normal"
       variant='outlined'
     />
   </div>
   </div>)
    }else{
      return(
      <div>
      </div>)
    }
  }
  salvarDados = () => {
    if(this.state.iddoaluno === ''){
        alert('Adicione o ID do Aluno')
    }else{
      //AJUSTAR DATANASCIMENTO
        Axios.post(`http://projeto-extensao-backend.herokuapp.com/psicologia`, {
          comorelacionamentofamiliar:this.state.comorelacionamentofamiliar,
    usomedicamentospsiquiátricos:this.state.usomedicamentospsiquiátricos,
    acompanhamentopsiquiátrico:this.state.acompanhamentopsiquiátrico,
    avaliaqualidadedosono:this.state.avaliaqualidadedosono,

    tentativasuicídio:this.state.tentativasuicídio,
    preconceito:this.state.preconceito,
    conflitocomlei:this.state.conflitocomlei,
    desemprego:this.state.desemprego,
    violenciabullying:this.state.violenciabullying,
    problemasrelacionamento:this.state.problemasrelacionamento,
    alcoolismo:this.state.alcoolismo,
    usodedrogas:this.state.usodedrogas,
    problemafinanceiro:this.state.problemafinanceiro,
    prefironãodeclarar:this.state.prefironãodeclarar,
    outrosituações:this.state.outrosituações,
    outrosituaçõesoutro:this.state.outrosituaçõesoutro,
    nenhumadassituações:this.state.nenhumadassituações,

    tentativasuicídiofamiliar:this.state.tentativasuicídiofamiliar,
    preconceitofamiliar:this.state.preconceitofamiliar,
    conflitocomleifamiliar:this.state.conflitocomleifamiliar,
    desempregofamiliar:this.state.desempregofamiliar,
    violenciabullyingfamiliar:this.state.violenciabullyingfamiliar,
    problemasrelacionamentofamiliar:this.state.problemasrelacionamentofamiliar,
    alcoolismofamiliar:this.state.alcoolismofamiliar,
    usodedrogasfamiliar:this.state.usodedrogasfamiliar,
    problemafinanceirofamiliar:this.state.problemafinanceirofamiliar,
    prefironãodeclararfamiliar:this.state.prefironãodeclararfamiliar,
    outrosituaçõesfamiliar:this.state.outrosituaçõesfamiliar,
    outrosituaçõesoutrofamiliar:this.state.outrosituaçõesoutrofamiliar,
    nenhumadassituaçõesfamiliar:this.state.nenhumadassituaçõesfamiliar,

    tentativasuicídiofamiliarsim:this.state.tentativasuicídiofamiliarsim,
    preconceitofamiliarsim:this.state.preconceitofamiliarsim,
    conflitocomleifamiliarsim:this.state.conflitocomleifamiliarsim,
    desempregofamiliarsim:this.state.desempregofamiliarsim,
    violenciabullyingfamiliarsim:this.state.violenciabullyingfamiliarsim,
    problemasrelacionamentofamiliarsim:this.state.problemasrelacionamentofamiliarsim,
    alcoolismofamiliarsim:this.state.alcoolismofamiliarsim,
    usodedrogasfamiliarsim:this.state.usodedrogasfamiliarsim,
    problemafinanceirofamiliarsim:this.state.problemafinanceirofamiliarsim,
    prefironãodeclararfamiliarsim:this.state.prefironãodeclararfamiliarsim,
    outrosituaçõesfamiliarsim:this.state.outrosituaçõesfamiliarsim,
    outrosituaçõesoutrofamiliarsim:this.state.outrosituaçõesoutrofamiliarsim,
    nenhumadassituaçõesfamiliarsim:this.state.nenhumadassituaçõesfamiliarsim,

    familiaacompanhamento:this.state.familiaacompanhamento,


    temrelacionamentoafetivo:this.state.temrelacionamentoafetivo,
    relacionamentoconsidera:this.state.relacionamentoconsidera,
    relacionamentoconsideraoutro:this.state.relacionamentoconsideraoutro,
    teverelaçãosexual:this.state.teverelaçãosexual,
    teverelaçãosexualsim:this.state.teverelaçãosexualsim,
    quantosparceiros:this.state.quantosparceiros,
    frequênciarelaçãosexual:this.state.frequênciarelaçãosexual,
    relaçãoanaloral:this.state.relaçãoanaloral,
    orientaçãosexual:this.state.orientaçãosexual,
    orientaçãosexualoutro:this.state.orientaçãosexualoutro,
    atraçãofísica:this.state.atraçãofísica,
    tevedst:this.state.tevedst,
    tratamentodst:this.state.tratamentodst,
    ondetratadst:this.state.ondetratadst,
    usadroga:this.state.usadroga,
    usadrogasim:this.state.usadrogasim,
    usapreservativo:this.state.usapreservativo,
    usapreservativonao:this.state.usapreservativonao,
    usadrogasexo:this.state.usadrogasexo,
    usadrogasexooutro:this.state.usadrogasexooutro,
    comoobterinformaçãooutro:this.state.comoobterinformaçãooutro,
    internet:this.state.internet,
    jornal:this.state.jornal,
    televisão:this.state.televisão,
    amigos:this.state.amigos,
    revistas:this.state.revistas,
    outro: this.state.outro,
    exameaids:this.state.exameaids,
    prevençãoaids:this.state.prevençãoaids,
    prevençãoaidsoutro:this.state.prevençãoaidsoutro,
    avaliaconhecimentoaids:this.state.avaliaconhecimentoaids,
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
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Como está a sua satisfação com o seu relacionamento familiar ?</FormLabel>
          <RadioGroup
            aria-label="comorelacionamentofamiliar"
            name="comorelacionamentofamiliar"
            className={classes.group}
            value={this.state.comorelacionamentofamiliar}
            onChange={this.handleChange('comorelacionamentofamiliar')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Muito Satisfeito" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Satisfeito" />
            <FormControlLabel value="3" control={<Radio color='primary'/>} label="Satisfeito, mas mudaria algo" />
            <FormControlLabel value="4" control={<Radio color='primary'/>} label="Insatisfeito" />
            <FormControlLabel value="5" control={<Radio color='primary'/>} label="Muito Insatisfeito" />

          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Você fez uso de medicamentos psiquiátricos nos últimos 12 meses ?</FormLabel>
          <RadioGroup
            aria-label="usomedicamentospsiquiátricos"
            name="usomedicamentospsiquiátricos"
            className={classes.group}
            value={this.state.usomedicamentospsiquiátricos}
            onChange={this.handleChange('usomedicamentospsiquiátricos')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Sim" />
          </RadioGroup>

        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Você fez acompanhamento psiquiátrico ou psicológico nos últimos 12 meses ?</FormLabel>
          <RadioGroup
            aria-label="acompanhamentopsiquiátrico"
            name="acompanhamentopsiquiátrico"
            className={classes.group}
            value={this.state.acompanhamentopsiquiátrico}
            onChange={this.handleChange('acompanhamentopsiquiátrico')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Sim" />
          </RadioGroup>

        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Como você avalia a qualidade do seu sono no último mês ?</FormLabel>
          <RadioGroup
            aria-label="avaliaqualidadedosono"
            name="avaliaqualidadedosono"
            className={classes.group}
            value={this.state.avaliaqualidadedosono}
            onChange={this.handleChange('avaliaqualidadedosono')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Considero que não houve alteração no meu sono" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Estou dormindo mais do que costumava dormir" />
            <FormControlLabel value="3" control={<Radio color='primary'/>} label="Estou dormindo menos do que costumava dormir" />
           
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Situações que aconteceram com você nos últimos 12 meses (pode marcar mais de uma alternativa)</FormLabel>
          <FormGroup 
          row
          >
            <FormControlLabel value="1" control={<Checkbox checked={this.state.tentativasuicídio} onChange={this.handleChangeCheckboxloco('tentativasuicídio')} color='primary'/>} label="Tentativa de Suicídio" />
            <FormControlLabel value="2" control={<Checkbox checked={this.state.preconceito} onChange={this.handleChangeCheckboxloco('preconceito')} color='primary'/>} label="Preconceito" />
            <FormControlLabel value="3" control={<Checkbox checked={this.state.conflitocomlei} onChange={this.handleChangeCheckboxloco('conflitocomlei')} color='primary'/>} label="Conflito com a Lei" />
            <FormControlLabel value="4" control={<Checkbox checked={this.state.desemprego} onChange={this.handleChangeCheckboxloco('desemprego')} color='primary'/>} label="Desemprego" />
            <FormControlLabel value="5" control={<Checkbox checked={this.state.violenciabullying} onChange={this.handleChangeCheckboxloco('violenciabullying')} color='primary'/>} label="Violência / agressão/ bullying" />
            <FormControlLabel value="6" control={<Checkbox checked={this.state.problemasrelacionamento} onChange={this.handleChangeCheckboxloco('problemasrelacionamento')} color='primary'/>} label="Problemas de relacionamento" />
            <FormControlLabel value="7" control={<Checkbox checked={this.state.alcoolismo} onChange={this.handleChangeCheckboxloco('alcoolismo')} color='primary'/>} label="Alcoolismo" />
            <FormControlLabel value="8" control={<Checkbox checked={this.state.usodedrogas} onChange={this.handleChangeCheckboxloco('usodedrogas')} color='primary'/>} label="Uso de drogas" />
            <FormControlLabel value="9" control={<Checkbox checked={this.state.problemafinanceiro} onChange={this.handleChangeCheckboxloco('problemafinanceiro')} color='primary'/>} label="Problema financeiro" />
            <FormControlLabel value="10" control={<Checkbox checked={this.state.prefironãodeclarar} onChange={this.handleChangeCheckboxloco('prefironãodeclarar')} color='primary'/>} label="Prefiro não declarar" />
            <FormControlLabel value="11" control={<Checkbox checked={this.state.outrosituações} onChange={this.handleChangeCheckboxloco('outrosituações')} color='primary'/>} label="Outro" />
            <FormControlLabel value="12" control={<Checkbox checked={this.state.nenhumadassituações} onChange={this.handleChangeCheckboxloco('nenhumadassituações')} color='primary'/>} label="Nenhuma das situações ocorreu" />


          </FormGroup>
          <FormHelperText>Escolha quantos quiser</FormHelperText>
          {this.alunoSituaçõesAconteceram(classes.familiarTextField)}
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Alguém da sua família faz/fez acompanhamento psiquiátrico ou psicológico nos últimos 12 meses?</FormLabel>
          <RadioGroup
            aria-label="familiaacompanhamento"
            name="familiaacompanhamento"
            className={classes.group}
            value={this.state.familiaacompanhamento}
            onChange={this.handleChange('familiaacompanhamento')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Sim" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}> Situações que aconteceram com algum familiar nos últimos 12 meses (pode marcar mais de uma alternativa): Especifique</FormLabel>
          <FormGroup 
          row
          >
            <FormControlLabel value="1" control={<Checkbox checked={this.state.tentativasuicídiofamiliar} onChange={this.handleChangeCheckboxloco('tentativasuicídiofamiliar')} color='primary'/>} label="Tentativa de Suicídio" />
            <FormControlLabel value="2" control={<Checkbox checked={this.state.preconceitofamiliar} onChange={this.handleChangeCheckboxloco('preconceitofamiliar')} color='primary'/>} label="Preconceito" />
            <FormControlLabel value="3" control={<Checkbox checked={this.state.conflitocomleifamiliar} onChange={this.handleChangeCheckboxloco('conflitocomleifamiliar')} color='primary'/>} label="Conflito com a Lei" />
            <FormControlLabel value="4" control={<Checkbox checked={this.state.desempregofamiliar} onChange={this.handleChangeCheckboxloco('desempregofamiliar')} color='primary'/>} label="Desemprego" />
            <FormControlLabel value="5" control={<Checkbox checked={this.state.violenciabullyingfamiliar} onChange={this.handleChangeCheckboxloco('violenciabullyingfamiliar')} color='primary'/>} label="Violência / agressão/ bullying" />
            <FormControlLabel value="6" control={<Checkbox checked={this.state.problemasrelacionamentofamiliar} onChange={this.handleChangeCheckboxloco('problemasrelacionamentofamiliar')} color='primary'/>} label="Problemas de relacionamento" />
            <FormControlLabel value="7" control={<Checkbox checked={this.state.alcoolismofamiliar} onChange={this.handleChangeCheckboxloco('alcoolismofamiliar')} color='primary'/>} label="Alcoolismo" />
            <FormControlLabel value="8" control={<Checkbox checked={this.state.usodedrogasfamiliar} onChange={this.handleChangeCheckboxloco('usodedrogasfamiliar')} color='primary'/>} label="Uso de drogas" />
            <FormControlLabel value="9" control={<Checkbox checked={this.state.problemafinanceirofamiliar} onChange={this.handleChangeCheckboxloco('problemafinanceirofamiliar')} color='primary'/>} label="Problema financeiro" />
            <FormControlLabel value="10" control={<Checkbox checked={this.state.prefironãodeclararfamiliar} onChange={this.handleChangeCheckboxloco('prefironãodeclararfamiliar')} color='primary'/>} label="Prefiro não declarar" />
            <FormControlLabel value="11" control={<Checkbox checked={this.state.outrosituaçõesfamiliar} onChange={this.handleChangeCheckboxloco('outrosituaçõesfamiliar')} color='primary'/>} label="Outro" />
            <FormControlLabel value="12" control={<Checkbox checked={this.state.nenhumadassituaçõesfamiliar} onChange={this.handleChangeCheckboxloco('nenhumadassituaçõesfamiliar')} color='primary'/>} label="Nenhuma das situações ocorreu" />


          </FormGroup>
          <FormHelperText>Escolha quantos quiser</FormHelperText>
          {this.alunoTentativaSuicidio(classes.familiarTextField)}
          {this.alunoPreconceito(classes.familiarTextField)}
          {this.alunoConflito(classes.familiarTextField)}
          {this.alunoDesemprego(classes.familiarTextField)}
          {this.alunoViolência(classes.familiarTextField)}
          {this.alunoProblemasRelacionamento(classes.familiarTextField)}
          {this.alunoAlcoolismo(classes.familiarTextField)}
          {this.alunoUsoDeDrogas(classes.familiarTextField)}
          {this.alunoProblemaFinanceiro(classes.familiarTextField)}
          {this.alunoOutroSituações(classes.familiarTextField)}


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