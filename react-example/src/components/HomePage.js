import { useIntercom } from 'react-use-intercom';

function HomePage() {
    const {
        boot,
        shutdown,
        hardShutdown,
        update,
        hide,
        show,
        showMessages,
        showNewMessages,
        getVisitorId,
        startTour,
        trackEvent,
      } = useIntercom();
    
      const bootWithProps = () => boot({ name: 'Alex' });
      const updateWithProps = () => update({ name: 'Son' });
      const handleNewMessages = () => showNewMessages();
      const handleNewMessagesWithContent = () => showNewMessages('content');
      const handleGetVisitorId = () => console.log(getVisitorId());
      const handleStartTour = () => startTour(123);
      const handleTrackEvent = () => trackEvent('invited-friend');
      const handleTrackEventWithMetaData = () =>
        trackEvent('clicked-button-react', {
          name: 'Alex',
          duration: 19,
          type: 'JPEG',
          file_location: 'https://external-content.com/example.jpg',
          description: 'Tracked as soon as someone clicks the button',
        });
    
      return (
        <>
          <button onClick={boot}>Boot intercom</button>
          <button onClick={bootWithProps}>Boot with props</button>
          <button onClick={shutdown}>Shutdown</button>
          <button onClick={hardShutdown}>Hard shutdown</button>
          <button onClick={update}>Update clean session</button>
          <button onClick={updateWithProps}>Update session with props</button>
          <button onClick={show}>Show messages</button>
          <button onClick={hide}>Hide messages</button>
          <button onClick={showMessages}>Show message list</button>
          <button onClick={handleNewMessages}>Show new messages</button>
          <button onClick={handleNewMessagesWithContent}>
            Show new message with pre-filled content
          </button>
          <button onClick={handleGetVisitorId}>Get visitor id</button>
          <button onClick={handleStartTour}>Start tour</button>
          <button onClick={handleTrackEvent}>Track event</button>
          <button onClick={handleTrackEventWithMetaData}>
            Track event with metadata
          </button>
        </>
      );
}

export default HomePage;