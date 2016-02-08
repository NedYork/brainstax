# # users
# User.destroy_all
# MathG33k = User.create!(username: "MathG33k", email: "March14@gmail.com", password: "123456")
# HyperbolicParabola = User.create(username: "HyperbolicParabola", email: "Math3r@hotmail.com", password: "123456")
# PhyZiX = User.create!(username: "PhyZiX", email: "fma@physics.edu", password: "123456")
# FriedelKrafts= User.create!(username: "Org0N3rd", email: "RxnAllDay@gmail.com", password: "123456")
# QuantumTunnelBruh = User.create!(username: "QuantumTunnel", email: "SchrodingerR0x@harvard.edu", password: "123456")
# FirstAmendment = User.create!(username: "FirstAmendment", email: "MartinLKing@gmail.com", password: "123456")
# # = User.create!(username: , email: )
# users
User.destroy_all
MathG33k = User.create!(username: "MathG33k", password: "123456")
HyperbolicParabola = User.create(username: "HyperbolicParabola", password: "123456")
PhyZiX = User.create!(username: "PhyZiX", password: "123456")
FriedelKrafts= User.create!(username: "Org0N3rd", password: "123456")
QuantumTunnelBruh = User.create!(username: "QuantumTunnel", password: "123456")
FirstAmendment = User.create!(username: "FirstAmendment", password: "123456")
LanguageBro = User.create(username: "LanguageBro", password: "123456")
Darwin = User.create(username: "Darwin", password: "123456")
JSAddict = User.create(username: "JSAddict", password: "123456")
# = User.create!(username: , email: )

# Subjects
Subject.destroy_all
TestPrep = Subject.create!(author_id: JSAddict.id, title: "TestPrep" )
Math = Subject.create!(author_id: MathG33k.id, title: "Mathematics")
Physics = Subject.create!(author_id: PhyZiX.id, title: "Physics")
Chemistry = Subject.create!(author_id: FriedelKrafts.id, title: "Chemistry")
Biology = Subject.create!(author_id: Darwin.id, title: "Biology")
# Quantum = Subject.create!(author_id: QuantumTunnelBruh.id, title: "Quantum Mechanics")
English = Subject.create!(title: "English")
Language = Subject.create!(author_id: LanguageBro.id, title: "Language")

# Decks
Deck.destroy_all
GrePart1 = Deck.create!(name: "GRE Vocab Part 1", subject_id: TestPrep.id, author_id: JSAddict.id)
GrePart2 = Deck.create!(name: "GRE Vocab Part 2", subject_id: TestPrep.id, author_id: JSAddict.id)

Algebra = Deck.create!(name: "Algebra", subject_id: Math.id, author_id: HyperbolicParabola.id)
Geometry = Deck.create!(name: "Geometry", subject_id: Math.id, author_id: HyperbolicParabola.id)
Calculus = Deck.create!(name: "Calculus", subject_id: Math.id, author_id: HyperbolicParabola.id)
PreCalculus = Deck.create!(name: "PreCalc", subject_id: Math.id, author_id: HyperbolicParabola.id)

Quantum = Deck.create!(name: "Quantum Mechanics", subject_id: Physics.id, author_id: QuantumTunnelBruh.id)
Thermo = Deck.create!(name: "Thermodynamics", subject_id: Physics.id, author_id: QuantumTunnelBruh.id)
FluidDynamics = Deck.create!(name: "Fluid dynamics", subject_id: Physics.id, author_id: QuantumTunnelBruh.id)

Orgo = Deck.create!(name: "OrgoChem", subject_id: Chemistry.id, author_id: FriedelKrafts.id)
Inorganic = Deck.create!(name: "Inorganic", subject_id: Chemistry.id, author_id: FriedelKrafts.id)
AnalyticalChem = Deck.create!(name: "AnalyticalChem", subject_id: Chemistry.id, author_id: FriedelKrafts.id)
PhysicalChem1 = Deck.create!(name: "Thermodynamics", subject_id: Chemistry.id, author_id: FriedelKrafts.id)
PhysicalChem2 = Deck.create!(name: "QuantumChem", subject_id: Chemistry.id, author_id: FriedelKrafts.id)

Evolution = Deck.create!(name: "Evolution", subject_id: Biology.id, author_id: Darwin.id)
BioChem = Deck.create!(name: "BioChem", subject_id: Biology.id, author_id: Darwin.id)
Physiology = Deck.create!(name: "Physiology", subject_id: Biology.id, author_id: Darwin.id)
Anatomy = Deck.create!(name: "Anatomy", subject_id: Biology.id, author_id: Darwin.id)
Marine = Deck.create!(name: "Marine", subject_id: Biology.id, author_id: Darwin.id)

Chinese = Deck.create!(name: "Chinese", subject_id: Language.id, author_id: LanguageBro.id)
Italian = Deck.create!(name: "Italian", subject_id: Language.id, author_id: LanguageBro.id)
Spanish = Deck.create!(name: "Spanish", subject_id: Language.id, author_id: LanguageBro.id)
Japanese = Deck.create!(name: "Japanese", subject_id: Language.id, author_id: LanguageBro.id)
Esperanto = Deck.create!(name: "Esperanto", subject_id: Language.id, author_id: LanguageBro.id)


# Cards
Card.destroy_all

card1 = Card.create!(front: "Abhor", back: "To strongly dislike", deck_id: GrePart1.id)
card2 = Card.create!(front: "Bigot", back: "Prejudiced person", deck_id: GrePart1.id)
card3 = Card.create!(front: "Counterfeit", back: "False", deck_id: GrePart1.id)
card4 = Card.create!(front: "Enfranchise", back: "Give voting rights", deck_id: GrePart1.id)
card5 = Card.create!(front: "Hamper", back: "Hinder", deck_id: GrePart1.id)
card6 = Card.create!(front: "Kindle", back: "To start a fire", deck_id: GrePart1.id)
card7 = Card.create!(front: "Noxious", back: "Harmful", deck_id: GrePart1.id)
card8 = Card.create!(front: "Placid", back: "Calm", deck_id: GrePart1.id)
card9 = Card.create!(front: "Remuneration", back: "Payment for work done", deck_id: GrePart1.id)
card10 = Card.create!(front: "Talisman", back: "Lucky charm", deck_id: GrePart1.id)

card11 = Card.create!(front: "Acquiesce", back: "to agree to; give in to", deck_id: GrePart2.id)
card12 = Card.create!(front: "Bombast", back: "arrogant, pompous language", deck_id: GrePart2.id)
card13 = Card.create!(front: "Curtail", back: "cut short", deck_id: GrePart2.id)
card14 = Card.create!(front: "Heed", back: "someone who appreciates good food and drink", deck_id: GrePart2.id)
card15 = Card.create!(front: "Lampoon", back: "listen to", deck_id: GrePart2.id)
card16 = Card.create!(front: "Oblivious", back: "ridicule; spoof", deck_id: GrePart2.id)
card17 = Card.create!(front: "Podium", back: "totally unaware", deck_id: GrePart2.id)
card18 = Card.create!(front: "Resonant", back: "raised platform", deck_id: GrePart2.id)
card19 = Card.create!(front: "Talisman", back: "echoing", deck_id: GrePart2.id)
card20 = Card.create!(front: "Tenuous", back: "flimsy; not solid", deck_id: GrePart2.id)
