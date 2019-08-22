import React from 'react';
import PropTypes from 'prop-types';
import { withStyles} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import InputAdornment from '@material-ui/core/InputAdornment';
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
  fab: {
    width:100
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

    peso:"",
    altura:"",
    satisfaçãocorpo:'',
    satisfaçãopeso:'',
    recebeuorientaçãonutricional:'',
    tomasuplemento:'',
    tomasuplementosim:'',
    avaliaalimentação:'',
    ondecafé:'',
    ondealmoça:'',
    ondejanta:'',
    avaliaru:'',
    avaliaapetite:'',
    apresentaintolerância:'',
    apresentaintolerânciaoutro:'',
    funcionamentointestinal:'',

    iddoaluno:''
  };


  handleChangeSwitch1 = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  alunoTomaSuplemento = ( classtextfieldnumero) => {
    if(this.state.tomasuplemento === '2'){
    return (<div>
    <div >
      <TextField
       id="tomasuplementosim"
       label="Qual?"
       className={classtextfieldnumero}
       value={this.state.tomasuplementosim}
       onChange={this.handleChange('tomasuplementosim')}
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
  alunoApresentaIntolerância = ( classtextfieldnumero) => {
    if(this.state.apresentaintolerância === '5'){
    return (<div>
    <div >
      <TextField
       id="apresentaintolerânciaoutro"
       label="Qual?"
       className={classtextfieldnumero}
       value={this.state.apresentaintolerânciaoutro}
       onChange={this.handleChange('apresentaintolerânciaoutro')}
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
        Axios.post(`http://projeto-extensao-backend.herokuapp.com/nutricao`, {
          peso:this.state.peso,
          altura:this.state.altura,
          satisfaçãocorpo:this.state.satisfaçãocorpo,
          satisfaçãopeso:this.state.satisfaçãopeso,
          recebeuorientaçãonutricional:this.state.recebeuorientaçãonutricional,
          tomasuplemento:this.state.tomasuplemento,
          tomasuplementosim:this.state.tomasuplementosim,
          avaliaalimentação:this.state.avaliaalimentação,
          ondecafé:this.state.ondecafé,
          ondealmoça:this.state.ondealmoça,
          ondejanta:this.state.ondejanta,
          avaliaru:this.state.avaliaru,
          avaliaapetite:this.state.avaliaapetite,
          apresentaintolerância:this.state.apresentaintolerância,
          apresentaintolerânciaoutro:this.state.apresentaintolerânciaoutro,
          funcionamentointestinal:this.state.funcionamentointestinal,
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
      <TextField
          id="peso"
          label="Peso"
          className={classes.textFieldFirst}
          value={this.state.peso}
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
        }}
          onChange={this.handleChange('peso')}
          margin="normal"
          variant='outlined'
        />
       <TextField
          id="altura"
          label="Altura"
          className={classes.textFieldFirst}
          value={this.state.altura}
          InputProps={{
            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
        }}
          onChange={this.handleChange('altura')}
          margin="normal"
          variant='outlined'
        />
        </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Qual o seu grau de satisfação com a sua imagem corporal ?</FormLabel>
          <RadioGroup
            aria-label="satisfaçãocorpo"
            name="satisfaçãocorpo"
            className={classes.group}
            value={this.state.satisfaçãocorpo}
            onChange={this.handleChange('satisfaçãocorpo')}
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
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Qual o seu grau de satisfação com a seu peso corporal ?</FormLabel>
          <RadioGroup
            aria-label="satisfaçãopeso"
            name="satisfaçãopeso"
            className={classes.group}
            value={this.state.satisfaçãopeso}
            onChange={this.handleChange('satisfaçãopeso')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Gostaria de ganhar peso" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Gostaria de perder peso" />
            <FormControlLabel value="3" control={<Radio color='primary'/>} label="Gostaria de manter o peso" />

          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Você já recebeu alguma orientação nutricional ?</FormLabel>
          <RadioGroup
            aria-label="recebeuorientaçãonutricional"
            name="recebeuorientaçãonutricional"
            className={classes.group}
            value={this.state.recebeuorientaçãonutricional}
            onChange={this.handleChange('recebeuorientaçãonutricional')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Sim, de educador físico" />
            <FormControlLabel value="3" control={<Radio color='primary'/>} label="Sim, de médico" />
            <FormControlLabel value="4" control={<Radio color='primary'/>} label="Sim, de nutricionista" />
            <FormControlLabel value="5" control={<Radio color='primary'/>} label="Sim, de outro profissional" />
            <FormControlLabel value="5" control={<Radio color='primary'/>} label="Sim, da internet/redes sociais" />


          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Toma ou já tomou algum suplemento alimentar?</FormLabel>
          <RadioGroup
            aria-label="tomasuplemento"
            name="tomasuplemento"
            className={classes.group}
            value={this.state.tomasuplemento}
            onChange={this.handleChangeRadio('tomasuplemento')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Sim" />
          </RadioGroup>
          {this.alunoTomaSuplemento()}

        </FormControl>
        
      </div>

      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Como você avalia a qualidade da sua alimentação ?</FormLabel>
          <RadioGroup
            aria-label="avaliaalimentação"
            name="avaliaalimentação"
            className={classes.group}
            value={this.state.avaliaalimentação}
            onChange={this.handleChange('avaliaalimentação')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Ótima" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Boa" />
            <FormControlLabel value="3" control={<Radio color='primary'/>} label="Regular" />
            <FormControlLabel value="4" control={<Radio color='primary'/>} label="Ruim" />
            <FormControlLabel value="5" control={<Radio color='primary'/>} label="Muito Ruim" />

          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Onde toma Café ?</FormLabel>
          <RadioGroup
            aria-label="ondecafé"
            name="ondecafé"
            className={classes.group}
            value={this.state.ondecafé}
            onChange={this.handleChange('ondecafé')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não Realizo essa Refeição" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Em casa" />
            <FormControlLabel value="3" control={<Radio color='primary'/>} label="No RU" />
            <FormControlLabel value="4" control={<Radio color='primary'/>} label="Outro Locais" />

          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Onde Almoça ?</FormLabel>
          <RadioGroup
            aria-label="ondealmoça"
            name="ondealmoça"
            className={classes.group}
            value={this.state.ondealmoça}
            onChange={this.handleChange('ondealmoça')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não Realizo essa Refeição" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Em casa" />
            <FormControlLabel value="3" control={<Radio color='primary'/>} label="No RU" />
            <FormControlLabel value="4" control={<Radio color='primary'/>} label="Outro Locais" />

          </RadioGroup>
        </FormControl>
      </div>

      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Onde Janta ?</FormLabel>
          <RadioGroup
            aria-label="ondejanta"
            name="ondejanta"
            className={classes.group}
            value={this.state.ondejanta}
            onChange={this.handleChange('ondejanta')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não Realizo essa Refeição" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Em casa" />
            <FormControlLabel value="3" control={<Radio color='primary'/>} label="No RU" />
            <FormControlLabel value="4" control={<Radio color='primary'/>} label="Outro Locais" />

          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Como você avalia a qualidade da alimentação servida no RU (Restaurante Universitário) ?</FormLabel>
          <RadioGroup
            aria-label="avaliaru"
            name="avaliaru"
            className={classes.group}
            value={this.state.avaliaru}
            onChange={this.handleChange('avaliaru')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Não realizo nenhuma refeição no RU" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Ótima" />
            <FormControlLabel value="3" control={<Radio color='primary'/>} label="Boa" />
            <FormControlLabel value="4" control={<Radio color='primary'/>} label="Regular" />
            <FormControlLabel value="5" control={<Radio color='primary'/>} label="Ruim" />
            <FormControlLabel value="6" control={<Radio color='primary'/>} label="Muito Ruim" />

          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Como você avalia o seu apetite no último mês ?</FormLabel>
          <RadioGroup
            aria-label="avaliaapetite"
            name="avaliaapetite"
            className={classes.group}
            value={this.state.avaliaapetite}
            onChange={this.handleChange('avaliaapetite')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Considero que não houve alteração no meu apetite" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Meu apetite não é tão bom como costumava ser" />
            <FormControlLabel value="3" control={<Radio color='primary'/>} label="Meu apetite está muito pior agora" />
            <FormControlLabel value="4" control={<Radio color='primary'/>} label="Não tenho mais apetite" />

          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Apresenta ou apresentou alguma intolerância/alergia alimentar ?</FormLabel>
          <RadioGroup
            aria-label="apresentaintolerância"
            name="apresentaintolerância"
            className={classes.group}
            value={this.state.apresentaintolerância}
            onChange={this.handleChange('apresentaintolerância')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Intolerância a lcatose" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Alergia ao leite" />
            <FormControlLabel value="3" control={<Radio color='primary'/>} label="Intolerância ao glúten" />
            <FormControlLabel value="4" control={<Radio color='primary'/>} label="Alergia ao glúten (doença celíaca)" />
            <FormControlLabel value="5" control={<Radio color='primary'/>} label="Outra" />
            <FormControlLabel value="6" control={<Radio color='primary'/>} label="Não" />

          </RadioGroup>
          {this.alunoApresentaIntolerância()}
        </FormControl>
      </div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontFamily:'Alegreya Sans',fontSize:20}}>Como é o seu funcionamento intestinal ?</FormLabel>
          <RadioGroup
            aria-label="funcionamentointestinal"
            name="funcionamentointestinal"
            className={classes.group}
            value={this.state.funcionamentointestinal}
            onChange={this.handleChange('funcionamentointestinal')}
            row
          >
            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Bom, funciona todos os dias" />
            <FormControlLabel value="2" control={<Radio color='primary'/>} label="Regular, funciona quase todos os dias" />
            <FormControlLabel value="3" control={<Radio color='primary'/>} label="Ruim, intestino preso/lento" />

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