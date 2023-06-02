import { Divider, Input } from 'antd';

const SearchBar = ({search,setSearch}) => {
  
const handleSearchInput = (e)=>{
  setSearch(e.target.value)
}
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={search} type="text" onChange={handleSearchInput} />
    </>
  )
}

export default SearchBar