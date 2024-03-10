import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '8c27f55d-fcbc-4365-92f2-d6d14ccc10f9', 
        props.user.username, 
        props.user.secret
    );
    return(
        <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: '100%'}} />
        </div>
    )
}

export default ChatsPage