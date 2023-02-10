window.SIDEBAR_ITEMS = {"enum":[["Any","An enum over the Advice, Fixed, Instance structs"],["Assigned","A value assigned to a cell within a circuit."],["Error","This is an error that could occur during proving or circuit synthesis."],["Expression","Low-degree expression representing an identity that must hold over the committed columns."]],"fn":[["create_proof","This creates a proof for the provided `circuit` when given the public parameters `params` and the proving key [`ProvingKey`] that was generated previously for the same circuit. The provided `instances` are zero-padded internally."],["keygen_pk","Generate a `ProvingKey` from a `VerifyingKey` and an instance of `Circuit`."],["keygen_vk","Generate a `VerifyingKey` from an instance of `Circuit`."],["verify_proof","Returns a boolean indicating whether or not the proof is valid"]],"struct":[["Advice","An advice column"],["AdviceQuery","Query of advice column at a certain relative location"],["BatchVerifier","A verifier that checks multiple proofs in a batch. This requires the `batch` crate feature to be enabled."],["Challenge","A challenge squeezed from transcript after advice columns at the phase have been committed."],["Column","A column with an index and type"],["Constraint","An individual polynomial constraint."],["ConstraintSystem","This is a description of the circuit environment, such as the gate, column and permutation arrangements."],["Constraints","A set of polynomial constraints with a common selector."],["FirstPhase","First phase"],["Fixed","A fixed column"],["FixedQuery","Query of fixed column at a certain relative location"],["Gate","Gate"],["Instance","An instance column"],["InstanceQuery","Query of instance column at a certain relative location"],["PinnedConstraintSystem","Represents the minimal parameters that determine a `ConstraintSystem`."],["PinnedVerificationKey","Minimal representation of a verification key that can be used to identify its active contents."],["ProvingKey","This is a proving key which allows for the creation of proofs for a particular circuit."],["SecondPhase","Second phase"],["Selector","A selector, representing a fixed boolean value per row of the circuit."],["TableColumn","A fixed column of a lookup table."],["ThirdPhase","Third phase"],["VerifyingKey","This is a verifying key which allows for the verification of proofs for a particular circuit."],["VirtualCell","A “virtual cell” is a PLONK cell that has been queried at a particular relative offset within a custom gate."],["VirtualCells","Exposes the “virtual cells” that can be queried while creating a custom gate or lookup table."]],"trait":[["Assignment","This trait allows a [`Circuit`] to direct some backend to assign a witness for a constraint system."],["Circuit","This is a trait that circuits provide implementations for so that the backend prover can ask the circuit to synthesize using some given [`ConstraintSystem`] implementation."],["ColumnType","A column type"],["FloorPlanner","A floor planning strategy for a circuit."],["Phase","Phase of advice column"]]};