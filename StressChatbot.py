import random
import pyttsx3
import pyjokes
import webbrowser
import os
import sys

# ---- safe init for TTS ----
try:
    engine = pyttsx3.init()
    engine.setProperty("rate", 150)
    engine.setProperty("volume", 1)
except Exception as e:
    engine = None
    print("Warning: pyttsx3 init failed:", e)

def speak(text):
    if engine:
        try:
            engine.say(text)
            engine.runAndWait()
        except Exception as e:
            # don't crash on TTS error
            print("TTS error:", e)

# ---- canned responses ----
responses = [
    "I hear you. It must be really tough 💙 but remember, you're not alone.",
    "Take a deep breath. You're doing better than you think.",
    "It's okay to not feel okay sometimes. 🌸",
    "Want me to share a relaxation tip with you?",
    "You're stronger than this moment. Keep going 💪",
    "Do you want to talk about something that makes you happy?",
    "Yes, I am here with you every time 😊",
    "If you don't mind, you can share your problem. I am here to listen 😊",
]

# ------------------ Rock Paper Scissors ------------------
def rock_paper_scissors():
    print("🎮 Bot: Let's play Rock-Paper-Scissors! (type 'exit' to stop the game)")
    speak("Let's play Rock Paper Scissors. Type exit to stop.")
    choices = ["rock", "paper", "scissors"]

    while True:
        user_choice = input("🎮 You (rock/paper/scissors or 'exit'): ").strip().lower()

        if user_choice in ("exit", "quit"):
            print("🎮 Bot: Game ended. Back to chat.")
            speak("Game ended. Back to chat.")
            break

        if user_choice not in choices:
            print("🎮 Bot: Invalid choice. Please enter rock, paper, or scissors.")
            speak("Invalid choice. Please enter rock, paper, or scissors.")
            continue

        bot_choice = random.choice(choices)
        print(f"🎮 Bot chose: {bot_choice}")
        speak(f"I chose {bot_choice}")

        if user_choice == bot_choice:
            result = "It's a tie!"
        elif (user_choice == "rock" and bot_choice == "scissors") or \
             (user_choice == "scissors" and bot_choice == "paper") or \
             (user_choice == "paper" and bot_choice == "rock"):
            result = "You win! 🎉"
        else:
            result = "You lose! 😅"

        print("🎮 Bot:", result)
        speak(result)
# --------------------------------------------------------

def chatbot():
    print("💭 Stress Helper Bot: HI, I'm your AI friend. I'm here to listen to you. Type 'exit' to stop.")
    speak("Hi, I'm your AI friend. I'm here to listen to you. Type exit to stop.")

    while True:
        user_input = input("You: ").strip().lower()

        # exit
        if user_input in ["exit", "quit", "bye"]:
            farewell = "Take care of yourself, you matter 🌸"
            print("💭 Bot:", farewell)
            speak(farewell)
            break

        # jokes
        elif "joke" in user_input:
            joke = pyjokes.get_joke()
            print("😂 Bot:", joke)
            speak(joke)

        # funny video
        elif "funny video" in user_input:
            print("😂 Bot: Try not to laugh")
            speak("Try not to laugh.")
            webbrowser.open("https://youtu.be/SO9gmu8_2KM?si=BBatIrm_jvPftLGx")

        # music/song
        elif "song" in user_input or "music" in user_input:
            print("🎶 Bot: Sure! Playing a song for you")
            speak("Sure! Playing a song for you.")
            webbrowser.open("https://youtu.be/bw7bVpI5VcM?si=6Y4PEqV1MoPWb_Co")

        # games menu (immediately accepts "games" or "play")
        elif "games" in user_input or "game" in user_input or "play" in user_input:
            print("🎮 Bot: Sure! We can play games.")
            speak("Sure! We can play games.")
            print("🎮 Bot: Which game would you like to play?\n1. Rock Paper Scissors\n2. Cancel")
            speak("Which game would you like to play? Option one, Rock Paper Scissors. Option two, Cancel.")
            choice = input("Enter the number or game name: ").strip().lower()

            if choice in ("1", "rock", "rps", "rock paper scissors", "rock-paper-scissors"):
                rock_paper_scissors()
            else:
                print("🎮 Bot: Okay, back to chat.")
                speak("Okay, back to chat.")

        # fallback responses
        else:
            reply = random.choice(responses)
            print("💭 Bot:", reply)
            speak(reply)

if __name__ == "__main__":
    chatbot()
