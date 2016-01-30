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
# = User.create!(username: , email: )

# Subjects
Subject.destroy_all
Math = Subject.create!(author_id: MathG33k.id, title: "Mathematics")
Physics = Subject.create!(author_id: PhyZiX.id, title: "Physics")
Chemistry = Subject.create!(author_id: FriedelKrafts.id, title: "Chemistry")
Biology = Subject.create!(author_id: Darwin.id, title: "Biology")
# Quantum = Subject.create!(author_id: QuantumTunnelBruh.id, title: "Quantum Mechanics")
English = Subject.create!(title: "English")
Language = Subject.create!(author_id: LanguageBro.id, title: "Language")

# Decks
Deck.destroy_all
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
