from pydub import AudioSegment
from pydub.playback import play
from playsound import playsound
import eel

# Playing assistant sound function
@eel.expose
def playAssistantSound():
    music_dir = "www/assets/audio/start_sound.mp3"
    sound = AudioSegment.from_mp3(music_dir)
    play(sound)
