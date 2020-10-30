// Built for CISCO Collab Hacks


webex = webex.init({
  credentials: {
    access_token: `ZWM5ZDI3YjgtMzkzNi00NTQ2LWJlMWUtZWU2MTRiNzZjOTRiODZlN2IwZjYtZjUw_PF84_1eb65fdf-9643-417f-9974-ad72cae0e10f`
  }
});

webex.phone.register()
.catch((err) => {
  console.error(err);
  alert(err);
  throw err;
});

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

var name = (getUrlVars()["name"]) + '@cisco.com'
const call = webex.phone.dial(name);
bindCallEvents(call);

function bindCallEvents(call) {
  call.on(`error`, (err) => {
    console.error(err);
    alert(err);
  });

  call.once(`localMediaStream:change`, () => {
    document.getElementById(`self-view`).srcObject = call.localMediaStream;
  });

  call.once(`remoteMediaStream:change`, () => {
    document.getElementById(`remote-view`).srcObject = call.remoteMediaStream;
  });

  call.on(`disconnected`, () => {
    document.getElementById(`self-view`).srcObject = document.getElementById(`remote-view`).srcObject = undefined;
    call = undefined;
  });

document.getElementById(`hangup`).addEventListener(`click`, () => {
  call.hangup();
});
}