import React,{ useState, useEffect} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import IndividualSubDomainStart from './IndividualSubDomain/IndividualSubDomainStart';
import "d3-transition";
import { select } from "d3-selection";
import ReactWordcloud from "react-wordcloud";
import "./wordcloud.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import Loader from "../Loader/Loader";
import axios from 'axios';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Autocomplete, { autocompleteClasses , createFilterOptions } from '@mui/material/Autocomplete';
import useMediaQuery from '@mui/material/useMediaQuery';
import ListSubheader from '@mui/material/ListSubheader';
import Popper from '@mui/material/Popper';
import { useTheme, styled } from '@mui/material/styles';
import { VariableSizeList } from 'react-window';
import Typography from '@mui/material/Typography';


const LISTBOX_PADDING = 8; // px

function renderRow(props) {
  const { data, index, style } = props;
  const dataSet = data[index];
  const inlineStyle = {
    ...style,
    top: style.top + LISTBOX_PADDING,
  };

  if (dataSet.hasOwnProperty('group')) {
    return (
      <ListSubheader key={dataSet.key} component="div" style={inlineStyle}>
        {dataSet.group}
      </ListSubheader>
    );
  }

  return (
    <Typography component="li" {...dataSet[0]} noWrap style={inlineStyle}>
      {dataSet[1]}
    </Typography>
  );
}

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef((props, ref) => {
  const outerProps = React.useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

function useResetCache(data) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
}

// Adapter for react-window
const ListboxComponent = React.forwardRef(function ListboxComponent(props, ref) {
  const { children, ...other } = props;
  const itemData = [];
  children.forEach((item) => {
    itemData.push(item);
    itemData.push(...(item.children || []));
  });

  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'), {
    noSsr: true,
  });

  const itemCount = itemData.length;
  const itemSize = smUp ? 36 : 48;

  const getChildSize = (child) => {
    if (child.hasOwnProperty('group')) {
      return 48;
    }

    return itemSize;
  };

  const getHeight = () => {
    if (itemCount > 8) {
      return 8 * itemSize;
    }
    return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
  };

  const gridRef = useResetCache(itemCount);

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
          itemData={itemData}
          height={getHeight() + 2 * LISTBOX_PADDING}
          width="100%"
          ref={gridRef}
          outerElementType={OuterElementType}
          innerElementType="ul"
          itemSize={(index) => getChildSize(itemData[index])}
          overscanCount={5}
          itemCount={itemCount}
        >
          {renderRow}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>
  );
});

ListboxComponent.propTypes = {
  children: PropTypes.node,
};

// function random(length) {
//   const characters =
//     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let result = '';

//   for (let i = 0; i < length; i += 1) {
//     result += characters.charAt(Math.floor(Math.random() * characters.length));
//   }

//   return result;
// }

const StyledPopper = styled(Popper)({
  [`& .${autocompleteClasses.listbox}`]: {
    boxSizing: 'border-box',
    '& ul': {
      padding: 0,
      margin: 0,
    },
  },
});

function IndividualDomain() {

  const [words, setWords] = useState(null);
  const [searchdata, setSearchData] = useState(null);

  const sendGetRequestSearch = async () => {
    try {
        const datasearchdata = await axios.
        get(`http://3.110.131.196:8080/api/Individual/searchdata/`)
        .then(res => {
          console.log(res)
          const search = res.data;
          setSearchData(search);
        })

    } catch (err) {
        // Handle Error Here
        console.error(err);
        sendGetRequestSearch2();
    }
  };

  const sendGetRequestSearch2 = async () => {
    try {
        const datasearchdata = await axios.
        get(`http://3.110.131.196:8080/api/Individual/searchdata/`)
        .then(res => {
          console.log(res)
          const search = res.data;
          setSearchData(search);
        })

    } catch (err) {
        // Handle Error Here
        console.error(err);
        sendGetRequestSearch();
    }
  };

  const sendGetRequestWord = async () => {
    try {
      const datawordcloud = await axios.
      get(`http://3.110.131.196:8080/api/Individual/wordcloud`)
      .then(res => {
        console.log(res)
        const wordcloudwords = res.data;
        setWords(wordcloudwords);
      })
    }
    catch (err) {
      // Handle Error Here
      console.error(err);
      sendGetRequestWord2();
    }
  }

  const sendGetRequestWord2 = async () => {
    try {
      const datawordcloud = await axios.
      get(`http://3.110.131.196:8080/api/Individual/wordcloud`)
      .then(res => {
        console.log(res)
        const wordcloudwords = res.data;
        setWords(wordcloudwords);
      })
    }
    catch (err) {
      // Handle Error Here
      console.error(err);
      sendGetRequestWord();      
    }
  }

  useEffect(() => {
    sendGetRequestSearch();
    sendGetRequestWord();
  }, [])

  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    setValue(inputValue);
  }

  function getCallback(callback) {
    return function (word, event) {
      const isActive = callback !== "onWordMouseOut";
      const element = event.target;
      const text = select(element);
      text
        .on("click", () => {
          if (isActive) {
            setValue(word.text);
          }
        })
      //   .transition()
      //   .attr("background", "white")
      //   .attr("font-size", isActive ? "300%" : "100%")
      //   .attr("text-decoration", isActive ? "underline" : "none");
    };
  }
  
  const callbacks = {
    getWordColor: (word) => (word.value > 40 ? "orange" : "purple"),
    getWordTooltip: (word) =>
      `The subdomain "${word.text}" is accelerating by ${word.value}.`,
    onWordClick: getCallback("onWordClick"),
    onWordMouseOut: getCallback("onWordMouseOut"),
    onWordMouseOver: getCallback("onWordMouseOver")
  };
  
  const options = {
      rotations: 3,
      rotationAngles: [0, 0],
      fontSizes: [10, 40],
    };

  const filterOptions = createFilterOptions({
    matchFrom: 'start',
  });

  if(searchdata===null){
    return(
      <Loader />
    );
  }

  if(value !== null){
    return(
        <IndividualSubDomainStart domain={value} searchdata={searchdata}/>
    );
  }
  else{
    return (
      <div>
        <br></br>
        <h2 className='title'>Explore Technology Forecast</h2>
        <div className='searchbar'>
          <Autocomplete
            freeSolo
            disableClearable
            disableListWrap
            PopperComponent={StyledPopper}
            ListboxComponent={ListboxComponent}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            options={searchdata}
            filterOptions={filterOptions}
            style={{
              backgroundColor: 'white',
              width: '65%',
              marginLeft: '15%',
              borderTopLeftRadius: '0.4em',
              borderBottomLeftRadius: '0.4em',              
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Showing results for all domains"
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
              
            )}
            renderOption={(props, option) => [props, option]}
            renderGroup={(params) => params}
          />

          <SearchIcon 
            onClick={handleSearch}
            style={{
              backgroundColor: 'white',
              marginTop: '0.05em',
              width: '1.7em',
              height: '3.4em',
              borderTopRightRadius: '0.4em',
              borderBottomRightRadius: '0.4em',
              fontSize: '1em',
              color: 'grey',
              cursor: "pointer"
            }} />
        </div>
        <br></br>
        <h3 className="textforwordcloud">Accelerating Domains</h3>
        <div className="wordcloud">
          {words===null && (<Loader />)}
          {words!==null && (<ReactWordcloud callbacks={callbacks} words={words} options={options} />)}
        </div>
        <br></br>
        <br></br>
      </div>
  
    );
  }


}

export default IndividualDomain;