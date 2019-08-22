import React from 'react';
import PropTypes from 'prop-types';
import { withStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import blue from '@material-ui/core/colors/blue';
import gray from '@material-ui/core/colors/grey';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import MaskedInput from 'react-text-mask';
import Typography from '@material-ui/core/Typography';
import { unstable_Box as Box } from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
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
   root: {
    display: 'flex',
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

const currencies = [
  {
    value: 'USD',
    label: 'MG',
  },
  {
    value: 'EUR',
    label: 'PI',
  },
  {
    value: 'BTC',
    label: 'BA',
  },
  {
    value: 'JPY',
    label: 'RO',
  },
];
function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}
function TextMaskFixo(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}
function TextMaskCep(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[ /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

class TextFields extends React.Component {
  state = {
    numeroresponsavel: '(086)9    -    ',
    telefonefixo: '(   )     -    ',
    telefonecelular: '(086)9    -    ',
    telefoneopcional: '(   )     -    ',
    tituloeleitor:'',
    zonavoto:'',
    cpf:'',
    iddoaluno:'',
    numeromilitar:'',
    email:'',
    identidade:'',
    orgaoexpedidor:'',
    nome: '',
    ceporigem: '64   -    ',
    anoingresso:'',
    serie:'',
    estadoorigem:'',
    ruaorigem: '',
    zonaorigem: '',
    municipioorigem:'',
    cep: '64   -    ',
    estado:'',
    temparentes:'',
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


  alunoMenorDeIdade = (classeroot, classtextfieldfirst,classecontainer,classeformcontrol,numeroresponsavel) => {
    if(this.state.menoridade){
    return (<div>
    <div className={classeroot}>
      <TextField
       id="standard-name"
       label="Responsável"
       className={classtextfieldfirst}
       value={this.state.nomeresponsavel}
       onChange={this.handleChange('nomeresponsavel')}
       margin="normal"
       variant='outlined'
       
     />
     <TextField
       id="standard-name"
       label="Grau de Parentesco"
       className={classtextfieldfirst}
       value={this.state.graudeparentesco}
       onChange={this.handleChange('graudeparentesco')}
       margin="normal"
       variant='outlined'
     />
   </div>
   <div className={classecontainer}>
        <FormControl className={classeformcontrol}>
          <InputLabel htmlFor="formatted-text-mask-input">Número do Responsável</InputLabel>
          <Input
            value={numeroresponsavel}
            className={classeformcontrol}
            onChange={this.handleChange('numeroresponsavel')}
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustom}
          />
        </FormControl>
      </div>
   </div>)
    }else{
      return(
      <div className={classeroot}>
      </div>)
    }
  }
  ajusteSimNaoMenoridade = () => {
    if(this.state.menoridade){
    return (<div>
   <Typography component="div">
      <Box fontWeight={800} textAlign='left' fontSize={30} fontFamily='Alegreya Sans' style={{color:'green'}} m={1}>
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
  ajusteSimNaoEndereço = () => {
    if(this.state.enderecodiferente){
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
  ajusteSimNaoResidente = () => {
    if(this.state.residente){
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
  enderecoDiferente = (classeroot, classtextfieldfirst,classeformcontrol,classtextfield3em1linhaleft,cep,classestextfieldmax,classesformcontroldoubleradio,classesgroup) => {
    if(this.state.enderecodiferente){
    return (<div >
    <div className={classeroot}>
      <TextField
       id="standard-name"
       label="Rua"
       className={classestextfieldmax}
       value={this.state.rua}
       onChange={this.handleChange('rua')}
       margin="normal"
       variant='outlined'
     />
     <FormControl component="fieldset" className={classesformcontroldoubleradio}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Zona</FormLabel>
          <RadioGroup
            aria-label="Sexo3"
            name="gender3"
            className={classesgroup}
            value={this.state.zona}
            onChange={this.handleChangeRadio('zona')}
          >
          <div>
            <FormControlLabel value="urbana" control={<Radio checked={this.state.zona === 'urbana'} color='primary'/>} label="Urbana" />
            <FormControlLabel value="rural" control={<Radio checked={this.state.zona === 'rural'} color='primary'/>} label="Rural" />
            </div>
          </RadioGroup>
        </FormControl>
        
   </div>
    <div className={classeroot}>
      <TextField
       id="standard-name"
       label="Municipio"
       className={classtextfieldfirst}
       value={this.state.municipio}
       onChange={this.handleChange('municipio')}
       margin="normal"
       variant='outlined'
     />
     <TextField
       id="standard-name"
       label="Estado"
       className={classtextfield3em1linhaleft}
       value={this.state.estado}
       onChange={this.handleChange('estado')}
       margin="normal"
       variant='outlined'
     />
   </div>
   <div className={classeroot}>
   <FormControl className={classeformcontrol}>
          <InputLabel htmlFor="formatted-text-mask-input">Cep</InputLabel>
          <Input
            value={cep}
            className={classeformcontrol}
            onChange={this.handleChange('cep')}
            id="formatted-text-mask-input"
            inputComponent={TextMaskCep}
          />
        </FormControl>
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
    <Grid container >
        <Grid item xs={4}>
        <div className={classeroot}>
     <FormControl component="fieldset" className={classesformcontroldoubleradio}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Possui parentes ou amigos em Teresina?</FormLabel>
          <RadioGroup
            aria-label="Sexo3"
            name="gender3"
            className={classesgroup}
            value={this.state.temparentes}
            onChange={this.handleChangeRadio('temparentes')}
          >
          <div>
            <FormControlLabel value="sim" control={<Radio checked={this.state.temparentes === 'sim'} color='primary'/>} label="Sim" />
            <FormControlLabel value="nao" control={<Radio checked={this.state.temparentes === 'nao'} color='primary'/>} label="Não" />
            </div>
          </RadioGroup>
        </FormControl>  
   </div>
   <div className={classeroot}>
     <FormControl component="fieldset" className={classesformcontroldoubleradio}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Participa das reuniões?</FormLabel>
          <RadioGroup
            aria-label="Sexo3"
            name="gender3"
            className={classesgroup}
            value={this.state.participareuniao}
            onChange={this.handleChangeRadio('participareuniao')}
          >
          <div>
            <FormControlLabel value="sim" control={<Radio checked={this.state.participareuniao === 'sim'} color='primary'/>} label="Sim" />
            <FormControlLabel value="nao" control={<Radio checked={this.state.participareuniao === 'nao'} color='primary'/>} label="Não" />
            </div>
          </RadioGroup>
        </FormControl>  
   </div>
   <div className={classeroot}>
     <FormControl component="fieldset" className={classesformcontroldoubleradio}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Participa da limpeza do quarto?</FormLabel>
          <RadioGroup
            aria-label="Sexo3"
            name="gender3"
            className={classesgroup}
            value={this.state.participalimpeza}
            onChange={this.handleChangeRadio('participalimpeza')}
          >
          <div>
            <FormControlLabel value="sim" control={<Radio checked={this.state.participalimpeza === 'sim'} color='primary'/>} label="Sim" />
            <FormControlLabel value="nao" control={<Radio checked={this.state.participalimpeza === 'nao'} color='primary'/>} label="Não" />
            </div>
          </RadioGroup>
        </FormControl>  
   </div>
   <div className={classeroot}>
     <FormControl component="fieldset" className={classesformcontroldoubleradio}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Ficou doente?</FormLabel>
          <RadioGroup
            aria-label="Sexo3"
            name="gender3"
            className={classesgroup}
            value={this.state.ficoudoente}
            onChange={this.handleChangeRadio('ficoudoente')}
          >
          <div>
            <FormControlLabel value="sim" control={<Radio checked={this.state.ficoudoente === 'sim'} color='primary'/>} label="Sim" />
            <FormControlLabel value="nao" control={<Radio checked={this.state.ficoudoente === 'nao'} color='primary'/>} label="Não" />
            </div>
          </RadioGroup>
        </FormControl>  
   </div>
        </Grid>
        <Grid item xs={8}>
       
        </Grid>
      </Grid>
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
    const { numeroresponsavel,ceporigem,cep,telefonefixo,telefonecelular,telefoneopcional} = this.state;
    return (
      <div>
    <div>
    <Grid container>
        <Grid item xs={10}>
        <Typography component="div">
        <Box fontWeight={900} textAlign='left' fontSize={40} fontFamily='Alegreya Sans' style={{color:'#5c5765'}} m={1}>
        {this.props.h1first}
      </Box>
    </Typography>
        </Grid>
        <Grid item xs={2}>
        <Typography component="div">
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
      
    </Typography>
        </Grid>
      </Grid>
   </div>
      <form className={classes.container} noValidate autoComplete="off" style={{display:'block'}}>
        <TextField
          id="standard-name"
          label="Nome do Aluno"
          className={classes.textFieldFirst}
          value={this.state.nome}
          onChange={this.handleChange('nome')}
          margin="normal"
          variant='outlined'
        />
        <TextField
        id="date"
        label="Nascimento"
        type="date"
        className={classes.textField}
        margin="normal"
        variant='outlined'
        InputLabelProps={{
          shrink: true,
        }}
        />
        <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Sexo</FormLabel>
          <RadioGroup
            aria-label="Sexo2"
            name="gender2"
            className={classes.group}
            value={this.state.sexo}
            onChange={this.handleChangeRadio('sexo')}
            
          >
            <FormControlLabel value="feminino" control={<Radio/>} label="Feminino" />
            <FormControlLabel value="masculino" control={<Radio color="primary"/>} label="Masculino" />
            <FormControlLabel value="outro" control={<Radio color='primary'/>} label="Outro" />
          </RadioGroup>
        </FormControl>
        
      </div>
      <TextField
          disabled
          id="standard-disabled"
          label="Nacionalidade"
          defaultValue="Brasileiro"
          InputLabelProps={{
            classes: {
              root: classes.fontLabel,
            },
          }}
          InputProps={{
            classes: {
              input: classes.fontInput,
            },
          }}
          className={classes.textField}
          margin="normal"
          variant='outlined'
          helperText="Já definido"
        />
<TextField
          id="standard-uncontrolled"
          label="Naturalidade"
          className={classes.textFieldNaturalidade}
          margin="normal"
          variant='outlined'
        />
        <TextField
          id="standard-select-terceiroestado"
          select
          label="Estado"
          className={classes.textField}
          value={this.state.terceiroestado}
          onChange={this.handleChange('terceiroestado')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Selecione seu Estado"
          margin="normal"
          variant='outlined'
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
         <div className={classes.root}>
         <TextField
          id="standard-name"
          label="Nome do Pai"
          className={classes.textField3em1Linha}
          value={this.state.nomepai}
          onChange={this.handleChange('nomepai')}
          margin="normal"
          variant='outlined'
        />
         <TextField
          id="standard-name"
          label="Nome da Mãe"
          className={classes.textField3em1Linha}
          value={this.state.nomemae}
          onChange={this.handleChange('nomemae')}
          margin="normal"
          variant='outlined'
        />
        <TextField
          id="standard-name"
          label="Filiação"
          className={classes.textField3em1Linha}
          value={this.state.filiação}
          onChange={this.handleChange('filiação')}
          margin="normal"
          variant='outlined'
        />
              </div>

      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Cor/Raça/Etnia</FormLabel>
          <RadioGroup
            aria-label="Sexo3"
            name="gender3"
            className={classes.group}
            value={this.state.cor}
            onChange={this.handleChangeRadio('cor')}
          >
            <FormControlLabel value="preta" control={<Radio color='primary'/>} label="Preta" />
            <FormControlLabel value="branca" control={<Radio color='primary'/>} label="Branca" />
            <FormControlLabel value="parda" control={<Radio color='primary'/>} label="Parda" />
            <FormControlLabel value="indigena" control={<Radio color='primary'/>} label="Indígena" />
          </RadioGroup>
        </FormControl>
        
      </div>
      <div className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="formatted-text-mask-input">Telefone Fixo</InputLabel>
          <Input
            value={telefonefixo}
            className={classes.formControl}
            onChange={this.handleChange('telefonefixo')}
            id="formatted-text-mask-input"
            inputComponent={TextMaskFixo}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="formatted-text-mask-input">Telefone Celular</InputLabel>
          <Input
            value={telefonecelular}
            className={classes.formControl}
            onChange={this.handleChange('telefonecelular')}
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustom}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="formatted-text-mask-input">Telefone Opcional</InputLabel>
          <Input
            value={telefoneopcional}
            className={classes.formControl}
            onChange={this.handleChange('telefoneopcional')}
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustom}
          />
        </FormControl>
        <TextField
          id="standard-name"
          label="Endereço Email"
          type="email"
          name="email"
          autoComplete="email"
          className={classes.textFieldFirst}
          value={this.state.email}
          onChange={this.handleChange('email')}
          margin="normal"
          variant='outlined'
        />
      </div>
      <div className={classes.root}>
        
        </div>
      <div className={classes.root}>

      <FormGroup className={classes.formControl} row>
        <FormControlLabel
          control={
            <Switch
              checked={this.state.menoridade}
              onChange={this.handleChangeSwitch1('menoridade')}
              value="menoridade"
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
          label="Aluno menor de idade?"
        />
        <div className={classes.root}>
        {this.ajusteSimNaoMenoridade()}

      </div>
      </FormGroup>
      </div>

      {this.alunoMenorDeIdade(classes.root,classes.textFieldFirst,classes.container,classes.formControl,numeroresponsavel)}

      
      <div className={classes.root}>
      <Typography component="div">
      <Box fontWeight={400} textAlign='left' fontSize={30} fontFamily='Alegreya Sans' style={{color:'#025c'}} m={1}>
        Endereço de Origem
      </Box>
    </Typography>
      </div>
      <div className={classes.root}>
      <TextField
       id="standard-name"
       label="Rua"
       className={classes.textFieldMax}
       value={this.state.ruaorigem}
       onChange={this.handleChange('ruaorigem')}
       margin="normal"
       variant='outlined'
     />
     <FormControl component="fieldset" className={classes.formControlDoubleRadio}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Zona</FormLabel>
          <RadioGroup
            aria-label="Sexo3"
            name="gender3"
            className={classes.group}
            value={this.state.zonaorigem}
            onChange={this.handleChangeRadio('zonaorigem')}
          >
          <div>
            <FormControlLabel value="urbanaorigem" control={<Radio checked={this.state.zonaorigem === 'urbanaorigem'} color='primary'/>} label="Urbana" />
            <FormControlLabel value="ruralorigem" control={<Radio checked={this.state.zonaorigem === 'ruralorigem'} color='primary'/>} label="Rural" />
            </div>
          </RadioGroup>
        </FormControl>
        
   </div>
   <div className={classes.root}>
      <TextField
       id="standard-name"
       label="Municipio"
       className={classes.textFieldFirst}
       value={this.state.municipioorigem}
       onChange={this.handleChange('municipioorigem')}
       margin="normal"
       variant='outlined'
     />
     <TextField
       id="standard-name"
       label="Estado"
       className={classes.textField3em1LinhaLeft}
       value={this.state.estadoorigem}
       onChange={this.handleChange('estadoorigem')}
       margin="normal"
       variant='outlined'
     />
   </div>
   <div className={classes.root}>
   <FormControl className={classes.formControl}>
          <InputLabel htmlFor="formatted-text-mask-input">Cep</InputLabel>
          <Input
            value={ceporigem}
            className={classes.formControl}
            onChange={this.handleChange('ceporigem')}
            id="formatted-text-mask-input"
            inputComponent={TextMaskCep}
          />
        </FormControl>
   </div>
   <div className={classes.root}>

<FormGroup className={classes.formControl} row>
  <FormControlLabel
    control={
      <Switch
        checked={this.state.enderecodiferente}
        onChange={this.handleChangeSwitch1('enderecodiferente')}
        value="enderecodiferente"
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
    label="Está Morando em um endereço diferente da Origem?"
  />
   <div className={classes.root}>
        {this.ajusteSimNaoEndereço()}

      </div>
</FormGroup>

</div>

{this.enderecoDiferente(classes.root,classes.textFieldFirst,classes.formControl,classes.textField3em1LinhaLeft,cep,classes.textFieldMax,classes.formControlDoubleRadio,classes.group)}
<div className={classes.root}>
      <Typography component="div">
      <Box fontWeight={400} textAlign='left' fontSize={30} fontFamily='Alegreya Sans' style={{color:'#025c'}} m={1}>
        Documentos Pessoais
      </Box>
    </Typography>
      </div>
      <div className={classes.root}>
      <TextField
       id="standard-name"
       label="CPF"
       className={classes.textFieldFirst}
       value={this.state.cpf}
       onChange={this.handleChange('cpf')}
       margin="normal"
       variant='outlined'
     />
         <TextField
       id="standard-name"
       label="Documento Militar"
       className={classes.textFieldFirst}
       value={this.state.numeromilitar}
       onChange={this.handleChange('numeromilitar')}
       margin="normal"
       variant='outlined'
     />
   </div>
   <div className={classes.root}>
      <TextField
       id="standard-name"
       label="Identidade"
       className={classes.textFieldFirst}
       value={this.state.identidade}
       onChange={this.handleChange('identidade')}
       margin="normal"
       variant='outlined'
     />
         <TextField
       id="standard-name"
       label="Órgão Expedidor"
       className={classes.textFieldFirst}
       value={this.state.orgaoexpedidor}
       onChange={this.handleChange('orgaoexpedidor')}
       margin="normal"
       variant='outlined'
     />
   </div>
   <div className={classes.root}>
      <TextField
       id="standard-name"
       label="Título de Eleitor"
       className={classes.textField3em1Linha}
       value={this.state.tituloeleitor}
       onChange={this.handleChange('tituloeleitor')}
       margin="normal"
       variant='outlined'
     />
         <TextField
       id="standard-name"
       label="Zona"
       className={classes.textField3em1Linha}
       value={this.state.zonavoto}
       onChange={this.handleChange('zonavoto')}
       margin="normal"
       variant='outlined'
     />
      <TextField
       id="standard-name"
       label="Seção"
       className={classes.textField3em1Linha}
       value={this.state.secao}
       onChange={this.handleChange('secao')}
       margin="normal"
       variant='outlined'
     />
   </div>
   <div className={classes.root}>
      <Typography component="div">
      <Box fontWeight={400} textAlign='left' fontSize={30} fontFamily='Alegreya Sans' style={{color:'#025c'}} m={1}>
        Dados Acadêmicos
      </Box>
    </Typography>
      </div>
   <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Curso</FormLabel>
          <RadioGroup
            aria-label="Sexo3"
            name="gender3"
            className={classes.group}
            value={this.state.curso}
            onChange={this.handleChangeRadio('curso')}
          >
            <FormControlLabel value="agropecuariamedio" control={<Radio color='primary'/>} label="Técnico em Agropecuária concomitante com o ensino médio" />
            <FormControlLabel value="agropecuaria" control={<Radio color='primary'/>} label="Técnico em Agropecuária subsequente" />
            <FormControlLabel value="informatica" control={<Radio color='primary'/>} label="Técnico em Informática" />
            <FormControlLabel value="enfermagem" control={<Radio color='primary'/>} label="Técnico em Enfermagem" />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Turno</FormLabel>
          <RadioGroup
            aria-label="Sexo3"
            name="gender3"
            className={classes.group}
            value={this.state.turno}
            onChange={this.handleChangeRadio('turno')}
          >
            <FormControlLabel value="tarde" control={<Radio color='primary'/>} label="Manhã" />
            <FormControlLabel value="manha" control={<Radio color='primary'/>} label="Tarde" />
            <FormControlLabel value="integral" control={<Radio color='primary'/>} label="Integral" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
      <TextField
       id="standard-name"
       label="Ano de Ingresso"
       className={classes.textField3em1Linha}
       value={this.state.anoingresso}
       onChange={this.handleChange('anoingresso')}
       margin="normal"
       variant='outlined'
     />
     <TextField
       id="standard-name"
       label="Período/Série"
       className={classes.textField3em1Linha}
       value={this.state.serie}
       onChange={this.handleChange('serie')}
       margin="normal"
       variant='outlined'
     />
     </div>
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
    label="O Aluno é Residente?"
  />
  <div className={classes.root}>
        {this.ajusteSimNaoResidente()}

      </div>
</FormGroup>
</div>
{this.alunoResidente(classes.root,classes.textFieldFirst,classes.formControl,classes.textField3em1LinhaLeft,cep,classes.textFieldMax,classes.formControlDoubleRadio,classes.group)}
      </form>
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);