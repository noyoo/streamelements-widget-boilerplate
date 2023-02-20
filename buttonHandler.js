fetch('./eventDetails/widgetLoadEvent-detail.json')
    .then((response) => response.json())
    .then((json) => widgetLoadDetail = json)
    .then(() => {
        widgetLoad = new CustomEvent('onWidgetLoad', { detail: widgetLoadDetail });
        dispatchEvent(widgetLoad);
    });

fetch('./eventDetails/sessionUpdateEvent-detail.json')
    .then((response) => response.json())
    .then((json) => sessionUpdateDetail = json)
    .then(() => sendSessionUpdate = new CustomEvent('onSessionUpdate', { detail: sessionUpdateDetail }));

fetch('./eventDetails/EventReceivedSub-detail.json')
    .then((response) => response.json())
    .then((json) => subDetail = json)
    .then(() => sendSubEvent = new CustomEvent('onEventReceived', { detail: subDetail }));

fetch('./eventDetails/EventReceivedGiftSub-details.json')
    .then((response) => response.json())
    .then((json) => giftDetail = json)
    .then(() => sendGiftEvent = new CustomEvent('onEventReceived', { detail: giftDetail }));

fetch('./eventDetails/EventReceivedCommunityGiftSub-detail.json')
    .then((response) => response.json())
    .then((json) => communityGiftDetail = json)
    .then(() => sendCommunityGiftEvent = new CustomEvent('onEventReceived', { detail: communityGiftDetail }));

fetch('./eventDetails/EventReceivedTip-detail.json')
    .then((response) => response.json())
    .then((json) => tipDetail = json)
    .then(() => sendTipEvent = new CustomEvent('onEventReceived', { detail: tipDetail }));

fetch('./eventDetails/EventReceivedBits-detail.json')
    .then((response) => response.json())
    .then((json) => bitsDetail = json)
    .then(() => sendBitsEvent = new CustomEvent('onEventReceived', { detail: bitsDetail }));

fetch('./eventDetails/EventReceivedRaid-detail.json')
    .then((response) => response.json())
    .then((json) => raidDetail = json)
    .then(() => sendRaidEvent = new CustomEvent('onEventReceived', { detail: raidDetail }));

fetch('./eventDetails/EventReceivedFollow-detail.json')
    .then((response) => response.json())
    .then((json) => followDetail = json)
    .then(() => sendFollowEvent = new CustomEvent('onEventReceived', { detail: followDetail }));

fetch('./eventDetails/EventReceivedChatMessage-detail.json')
    .then((response) => response.json())
    .then((json) => chatDetail = json)
    .then(() => sendChatMessageEvent = new CustomEvent('onEventReceived', { detail: chatDetail }));

document.addEventListener('click', (obj) => {
    if (obj.target.tagName != 'BUTTON') return;

    switch (obj.target.id) {
        case 'normal-sub':
            window.dispatchEvent(sendSubEvent);
            window.dispatchEvent(sendSessionUpdate);
            break;
        case 'gift-sub':
            window.dispatchEvent(sendGiftEvent);
            window.dispatchEvent(sendSessionUpdate);
            break;
        case 'community-gift':
            window.dispatchEvent(sendCommunityGiftEvent);
            window.dispatchEvent(sendSessionUpdate);
            break;
        case 'tip':
            window.dispatchEvent(sendTipEvent);
            window.dispatchEvent(sendSessionUpdate);
            break;
        case 'bits':
            window.dispatchEvent(sendBitsEvent);
            window.dispatchEvent(sendSessionUpdate);
            break;
        case 'raid':
            window.dispatchEvent(sendRaidEvent);
            window.dispatchEvent(sendSessionUpdate);
            break;
        case 'follow':
            window.dispatchEvent(sendFollowEvent);
            window.dispatchEvent(sendSessionUpdate);
            break;
        case 'chat':
            window.dispatchEvent(sendChatMessageEvent);
            break;
    }
});
