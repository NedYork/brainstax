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
# = User.create!(username: , email: )

# Subjects
Subject.destroy_all
Math = Subject.create!(author_id: MathG33k.id, title: "Mathematics")
Physics = Subject.create!(author_id: PhyZiX.id, title: "Physics")
Orgo = Subject.create!(author_id: FriedelKrafts.id, title: "OrganicChemistry")
# Quantum = Subject.create!(author_id: QuantumTunnelBruh.id, title: "Quantum Mechanics")
English = Subject.create!(title: "English")
History = Subject.create!(author_id: FirstAmendment.id, title: "History")
# = Subject.create!(author_id: , title: )


# Decks
Deck.destroy_all
Algebra = Deck.create!(name: "Algebra", subject_id: Math.id, author_id: HyperbolicParabola.id)
Quantum = Deck.create!(name: "Quantum Mechanics", subject_id: Physics.id, author_id: QuantumTunnelBruh.id)
