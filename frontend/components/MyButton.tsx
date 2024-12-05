import { Text, TouchableOpacity } from 'react-native'


const MyButton = ({title,onPress}) => {
  return (
    
      <TouchableOpacity style={{backgroundColor:"orange",paddingHorizontal:40,paddingVertical:15,borderRadius:10,}}
      onPress={onPress}>
        <Text>
            {title}
        </Text>
      </TouchableOpacity>

  )
}



export default MyButton