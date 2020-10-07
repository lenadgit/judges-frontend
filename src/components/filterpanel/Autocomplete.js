/* eslint-disable no-use-before-define */
import React from "react";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles({
  root: {
    margin: 20,
  },
});

export default function ComboBox() {
  const classes = useStyles();
  return (
    <div>
      <Autocomplete
        className={classes.root}
        id="combo-box-demo"
        options={Region}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Область" variant="outlined" />
        )}
      />

      <Autocomplete
        className={classes.root}
        id="combo-box-demo"
        options={District}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Район" variant="outlined" />
        )}
      />

      <Autocomplete
        className={classes.root}
        id="combo-box-demo"
        options={Town}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Місто" variant="outlined" />
        )}
      />
    </div>
  );
}

const Region = [
  { title: "Автономна Республіка Крим" },
  { title: "Вінницька область" },
  { title: "Волинська область" },
  { title: "Дніпропетровська область" },
  { title: "Донецька область" },
  { title: "Житомирська область" },
  { title: "Закарпатська область" },
  { title: "Запорізька область" },
  { title: "Івано-Франківська область" },
  { title: "Київська область" },
  { title: "Кіровоградська область" },
  { title: "Луганська область" },
  { title: "Львівська область" },
  { title: "Миколаївська область" },
  { title: "Одеська область" },
  { title: "Полтавська область" },
  { title: "Рівненська область" },
  { title: "Сумська область" },
  { title: "Тернопільська область" },
  { title: "Харківська область" },
  { title: "Херсонська область" },
  { title: "Хмельницька область" },
  { title: "Черкаська область" },
  { title: "Чернівецька область" },
  { title: "Чернігівська область" },
  { title: "Київ" },
  { title: "Севастополь" },
];

const Town = [
  { title: "Автономна Республіка Крим" },
  { title: "Вінницька область" },
  { title: "Волинська область" },
  { title: "Дніпропетровська область" },
  { title: "Донецька область" },
  { title: "Житомирська область" },
  { title: "Закарпатська область" },
  { title: "Запорізька область" },
  { title: "Івано-Франківська область" },
  { title: "Київська область" },
  { title: "Кіровоградська область" },
  { title: "Луганська область" },
  { title: "Львівська область" },
  { title: "Миколаївська область" },
  { title: "Одеська область" },
  { title: "Полтавська область" },
  { title: "Рівненська область" },
  { title: "Сумська область" },
  { title: "Тернопільська область" },
  { title: "Харківська область" },
  { title: "Херсонська область" },
  { title: "Хмельницька область" },
  { title: "Черкаська область" },
  { title: "Чернівецька область" },
  { title: "Чернігівська область" },
  { title: "Київ" },
  { title: "Севастополь" },
];

const District = [
  { title: "Автономна Республіка Крим" },
  { title: "Вінницька область" },
  { title: "Волинська область" },
  { title: "Дніпропетровська область" },
  { title: "Донецька область" },
  { title: "Житомирська область" },
  { title: "Закарпатська область" },
  { title: "Запорізька область" },
  { title: "Івано-Франківська область" },
  { title: "Київська область" },
  { title: "Кіровоградська область" },
  { title: "Луганська область" },
  { title: "Львівська область" },
  { title: "Миколаївська область" },
  { title: "Одеська область" },
  { title: "Полтавська область" },
  { title: "Рівненська область" },
  { title: "Сумська область" },
  { title: "Тернопільська область" },
  { title: "Харківська область" },
  { title: "Херсонська область" },
  { title: "Хмельницька область" },
  { title: "Черкаська область" },
  { title: "Чернівецька область" },
  { title: "Чернігівська область" },
  { title: "Київ" },
  { title: "Севастополь" },
];
